//@flow
import React, { Component, Element } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import MTReturnMoneyItem from '../component/MTReturnMoneyItem';
import '../css/MTReturnSaveContainer.css';
const { WrappedFormUtils } = Form;
const FormItem = Form.Item;
let uuid = 0;

type Props = {
    form: WrappedFormUtils,
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

        getFieldDecorator('keys', { initialValue: [] });
        const keys: number[] = getFieldValue('keys');
        const formItems: Element<any>[] = keys.map((key, index) => {
            return (
                <FormItem  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                           label={index === 0 ? '打款明细' : ''}
                           required={false}
                           key={key}>
                    {getFieldDecorator(`field[${key}]`,{
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "请输全打款明细的内容，或者删除该明细！",
                        }],
                    })(
                        <MTReturnMoneyItem/>
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
        //判断是否可以提交
        //提交
    };

    //添加一个新的
    add = (): void => {
        const form = this.props.form;
        const keys: number[] = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid++);
        //更新form的值
        form.setFieldsValue({
            keys: nextKeys,
        })
    };

    //删除指定的一条
    remove = (k: number): void => {
        const form = this.props.form;
        const keys: number[] = form.getFieldValue('keys');
        //至少要保留一项
        if (keys.length == 1) {
            return;
        }
        //更新form的值，过滤掉制定的
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        })
    };

}

export default Form.create()(MTReturnSaveContainer);