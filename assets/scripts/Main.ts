/*
 * @Author: HanYaJun
 * @Date: 2023-09-21 16:24:12
 * @Email: hanyajun@wedobest.com.cn
 * @Description: 主界面加载
 */

import *as cc from 'cc';
import { DoublyLinkedList } from './DoublyLinkedList';

const trace = function (...args) {
    console.log("main【HYJ】", ...args);
}
const traceError = function (...args) {
    console.error("main【HYJ】", ...args);
}

const { ccclass, property } = cc._decorator;

@ccclass('main')
export class main extends cc.Component {
    private linked: DoublyLinkedList<number> = new DoublyLinkedList();

    /**
     * @description: 当附加到一个激活的节点上或者其节点第一次激活时候调用
     * @return {*}
     */
    protected onLoad(): void {
        for (let i = 0; i < 6; i++) {
            this.linked.tailAppend(i);
        }
        this.linked.headAppend(10);
        this.linked.tailAppend(20);
        this.linked.removeAt(-10);
        this.linked.forEach((value: number, index: number, doublyLinkedList: DoublyLinkedList<number>) => {
            trace('value:', value, 'index:', index, 'doublyLinkedList:', doublyLinkedList);
        });
    }
}



