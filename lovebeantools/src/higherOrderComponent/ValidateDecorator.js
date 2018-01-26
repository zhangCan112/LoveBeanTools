//@flow
import React, {Component, Element}  from 'react';
import type {Node} from 'react';

//给元素嵌套一个
export default function validateDecorator(options: any): (Element<any> => Element<any>) {
    return (element: Element<any>): Element<any> => {
        return (
            <span>
                <div>{element}</div>
                <h4> </h4>
            </span>
        );
    }
}

