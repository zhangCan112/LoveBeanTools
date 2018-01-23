//@flow




//增长率计算方法
export function computeGrowthRate(thisValue?: ?number, lastValue?: ?number): ?number {
     if (thisValue == null || thisValue == undefined) return null;
     if (lastValue == null || lastValue == undefined) return null;
     return (thisValue - lastValue) / lastValue;
 }