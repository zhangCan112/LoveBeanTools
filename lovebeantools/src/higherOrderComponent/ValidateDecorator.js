//@flow
import React, {Component, Element}  from 'react';
import type {Node} from 'react';

//给元素嵌套一个
export default function validateDecorator(props: any ,options: any | (props: any) => ?string): (Element<any> => Element<any>) {
    return (element: Element<any>): Element<any> => {
        return (
            <span style={{marginTop: 30}}>
                <div>{element}</div>
                <div> { parseOptions(props,options) } </div>
                <p>{''}</p>
            </span>
        );
    }
}

function parseOptions(props: any, options: any): any {
    if ((typeof options) === 'function') {
        return optionsIsFunc(options, props);
    } else {
        return optionsIsOther(options);
    }
}

function optionsIsFunc(func: any => ?string, props: any): ?string {
    return func(props);
}

function optionsIsOther(other: any): ?string {
    return String(other);
}