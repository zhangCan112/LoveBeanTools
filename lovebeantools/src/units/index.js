//@flow




//增长率计算方法
export function computeGrowthRate(thisValue: number, lastValue: number): number {
     return (thisValue - lastValue) / lastValue;
 }