/*
 * @Description: 
 * @Author: duanwensheng
 * @Date: 2023-07-06 11:41:14
 */
import { add } from './test'

test('两数相加', () => {
    const a = 1, b = 2;
    const sum = add(a, b);
    
    expect(sum).toEqual(3);
})