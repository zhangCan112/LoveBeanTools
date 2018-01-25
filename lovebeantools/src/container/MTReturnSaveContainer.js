//@flow
import React, { Component, Element } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import MTReturnMoneyItem from '../component/MTReturnMoneyItem';
import '../css/MTReturnSaveContainer.css';
import type {Value as MTReturnMoneyItemValue} from '../component/MTReturnMoneyItem';
import type {Dispatch} from '../actions/types';
import {setDeducPointAmount, computeDeductPointSaveAmount, addDeducPointAmount, deleteDeducPointAmount} from '../actions';
import type {State as DeductPointAmountMap } from '../reducer/deductPointAmount';
import type {State as DeductPointSaveAmountMap} from '../reducer/deductPointSaveAmount';
const { WrappedFormUtils } = Form;
const FormItem = Form.Item;
let uuid = 0;

type Props = {
    form: WrappedFormUtils,
    deductPointSaveAmount: DeductPointSaveAmountMap,
    deductPointAmount :DeductPointAmountMap,
    dispatch: Dispatch,
}

class MTReturnSaveContainer extends React.Component {
    props: Props;

    componentDidMount(): void {
        this.add();
    }
    render() {
        const getFieldDecorator = this.props.form.getFieldDecorator;
        const getFieldValue = this.props.form.getFieldValue;
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const keys: number[] = this.props.deductPointSaveAmount.keys;
        const formItems: Element<any>[] = keys.map((key, index) => {
            return (
                <FormItem  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                           label={index === 0 ? '打款明细' : ''}
                           required={false}
                           key={key}>
                    {getFieldDecorator(`field[${key}]`,{
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            validator: this.validatorMTReturnMoneyItemValue,
                        }],
                    })(
                        <MTReturnMoneyItem
                            onChange={(value: MTReturnMoneyItemValue)=>{
                                this.props.dispatch(setDeducPointAmount(key,value.deductPoint,value.actualAmount))
                            }}
                        />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(key)}
                        />
                    ) : null}
                </FormItem>
            );
        });

        return (
            <Form onSubmit={this.onSubmit}>
                {formItems}
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> 新增一项
                    </Button>
                </FormItem>
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="primary" htmlType="submit" style={{ width: '60%' }}>计算</Button>
                </FormItem>
            </Form>
        );
    }

    //event
    //提交
    onSubmit = (e: Event): void => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            //判断是否可以提交
            if (err) {
                alert('信息有误，请补充或删除无效的对象');
                return;
            }
            //提交
        });

    };

    //添加一个新的
    add = (): void => {
        this.props.dispatch(addDeducPointAmount());
    };

    //删除指定的一条
    remove = (k: number): void => {
        this.props.dispatch(deleteDeducPointAmount(k))
    };
    //明细输入内容的验证规则
    validatorMTReturnMoneyItemValue = (rule: any, value: MTReturnMoneyItemValue, callback: (error: ?string)=>void) => {
        if  (value === undefined) {
            callback('请输入打款明细，或者删除该明细！');
            return;
        } else if (!value.actualAmount && !value.deductPoint) {
            callback('请输入打款明细，或者删除该明细！');
            return;
        } else if (!value.actualAmount) {
            callback('请输入打款金额');
            return;
        } else if (!value.deductPoint) {
            callback('请输入扣点');
            return;
        }
        callback();
    };

}

export default Form.create({
    mapPropsToFields(props: Props) {
        return {
            field: Form.createFormField({
                ...props.deductPointAmount
            })
        };
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})(MTReturnSaveContainer);