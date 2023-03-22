# Health Calculations

[![Version](https://img.shields.io/npm/v/@widlestudiollp/health-calculation.svg)](https://www.npmjs.org/package/@widlestudiollp/health-calculation)

[![Downloads](https://img.shields.io/npm/dm/@widlestudiollp/health-calculation.svg)](https://www.npmjs.com/package/@widlestudiollp/health-calculation)

[![Try on RunKit](https://badge.runkitcdn.com/@widlestudiollp/health-calculation.svg)](https://runkit.com/npm/@widlestudiollp/health-calculation)

## [Installation](https://github.com/Widle-Studio/health-calculations#installation)

Install the package with:

```sh
npm install @widlestudiollp/health-calculation --save
# or
yarn add @widlestudiollp/health-calculation
```

## [Fitness](https://github.com/Widle-Studio/health-calculations#fitness-1)

1. [BMI Calculator](https://github.com/Widle-Studio/health-calculations#1-bmi-calculator) 
2. [Body Fat Calculator](https://github.com/Widle-Studio/health-calculations#2-body-fat-calculator)
3. [BMR Calculator](https://github.com/Widle-Studio/health-calculations#3-bmr-calculator)
4. [Ideal Weight Calculator](https://github.com/Widle-Studio/health-calculations#4-ideal-weight-calculator)
5. [Pace Calculator](https://github.com/Widle-Studio/health-calculations#5-pace-calculator)
6. [Army Body Fat Calculator](https://github.com/Widle-Studio/health-calculations#6-army-body-fat-calculator)
7. [Calorie Calculator](https://github.com/Widle-Studio/health-calculations#7-calorie-calculator)
8. [Lean Body Mass Calculator](https://github.com/Widle-Studio/health-calculations#8-lean-body-mass-calculator)
9. [Healthy Weight Calculator](https://github.com/Widle-Studio/health-calculations#9-healthy-weight-calculator)
10. [Calories Burned Calculator](https://github.com/Widle-Studio/health-calculations#10-calories-burned-calculator)

## [Pregnancy](https://github.com/Widle-Studio/health-calculations#pregnancy-1)

1. [Pregnancy Calculator](https://github.com/Widle-Studio/health-calculations#1-pregnancy-calculator)
2. [Pregnancy Weight Gain Calculator](https://github.com/Widle-Studio/health-calculations#2-pregnancy-weight-gain-calculator)
3. [Conception Calculator](https://github.com/Widle-Studio/health-calculations#3-conception-calculator)
4. [Estimate Delivery Date Calculator](https://github.com/Widle-Studio/health-calculations#4-estimate-delivery-date-calculator)
5. [Ovulation Calculator](https://github.com/Widle-Studio/health-calculations#5-ovulation-calculator)
6. [Period Calculator](https://github.com/Widle-Studio/health-calculations#6-period-calculator)

## [Other](https://github.com/Widle-Studio/health-calculations#other-1)

1. [Macro Calculator](https://github.com/Widle-Studio/health-calculations#1-macro-calculator)
2. [Carbohydrate Calculator](https://github.com/Widle-Studio/health-calculations#2-carbohydrate-calculator)
3. [Protein Calculator](https://github.com/Widle-Studio/health-calculations#3-protein-calculator)
4. [Fat Intake Calculator](https://github.com/Widle-Studio/health-calculations#4-fat-intake-calculator)
5. [TDEE Calculator](https://github.com/Widle-Studio/health-calculations#5-tdee-calculator)
6. [GFR Calculator](https://github.com/Widle-Studio/health-calculations#6-gfr-calculator)
7. [Body Type Calculator](https://github.com/Widle-Studio/health-calculations#7-body-type-calculator)
8. [Body Surface Area Calculator](https://github.com/Widle-Studio/health-calculations#8-body-surface-area-calculator)
9. [BAC Calculator](https://github.com/Widle-Studio/health-calculations#9-bac-calculator)

# Fitness

## 1. BMI Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.bmi(weight, weightType, height, heightTypes)
```

the result is :

```js
1233.06;
```

## 2. Body Fat Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `age`        | `number` | **Required**. age of a person                                   |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
gender : "Male" ,
age : 26,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.bodyFat(gender,age,weight, weightType, height, heightTypes)
```

the result is :

```js
1469.31;
```

## 3. BMR Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `age`        | `number` | **Required**. age of a person                                   |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
gender : "Male" ,
age : 26,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.bmr(gender,age,weight, weightType, height, heightTypes)
```

the result is :

```js
305.06;
```

## 4. Ideal Weight Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.idealWeight(weight, weightType, height, heightType)
```

the result is :

```js
"You are not over 5 feet";
```

## 5. Pace Calculator

| Parameter      | Type     | Description                                                            |
| :------------- | :------- | :--------------------------------------------------------------------- |
| `distance`     | `number` | **Required**. distance covered by a person.                            |
| `distanceType` | `string` | **Required**. distanceType (miles , kms , meters) covered by a person. |
| `time`         | `number` | **Required**. time taken by a person                                   |
| `timeType`     | `string` | **Required**. timeType (sec , min , hour) covered by a person.         |

#### Example :

```js
distance : 55,
distanceType : "miles",
times : 5.6,
timeType : "min"

health_calc.pace(distance, distanceType, times, timeType)
```

the result is :

```js
3.8;
```

## 6. Army Body Fat Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `waist`      | `number` | **Required**. waist size of a person                            |
| `neck`       | `number` | **Required**. neck size of a person                             |
| `sizeType`   | `string` | **Required**. sizeType (Meters , Inches) of a person            |
| `hip`        | `number` | **Required**. hip size of a Female only                         |

#### Example :

```js
gender : "Male" ,
height : 5.6,
heightType : "Inches",
waist : 5,
neck : 6,
type : "Inches"

health_calc.armyBody(gender, height, heightTypes, waist, neck, type, hip)
```

the result is :

```js
92.32;
```

## 7. Calorie Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `age`        | `number` | **Required**. age of a person                                   |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `  | `number` | **Required**. No. of days (0-7) person do exercise              |

#### Example :

```js
gender : "Male" ,
age : 26,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches",
exercise : 1

health_calc.calorie(gender,age,weight, weightType, height, heightTypes , exercise )
```

the result is :

```js
299.04;
```

## 8. Lean Body Mass Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
gender : "Male",
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.lbm(gender, weight, weightType, height, heightTypes)
```

the result is :

```js
-5.24;
```

## 9. Healthy Weight Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.healthyWeight(weight, weightType, height, heightTypes)
```

the result is :

```js
"Obese";
```

## 10. Calories Burned Calculator

| Parameter    | Type     | Description                                                                                                    |
| :----------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| `activity`   | `string` | **Required**. activity(Sleeping, Walking, Eating, Running, Other Heavy Work , Other Light Work) done by person |
| `weight`     | `number` | **Required**. weight of a person                                                                               |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person                                                            |

#### Example :

```js
activity : "Sleeping"
weight : 55,
weightType : "Pound"

health_calc.caloriesBurn(activity, weight, weightType)
```

the result is :

```js
8.3;
```

# Pregnancy

## 1. Pregnancy Calculator

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `date`    | `string` | **Required**. First Day of Your Last Period    |
| `scale`   | `number` | **Required**. Average Length of Cycles (22-44) |

#### Example :

```js
date : "01/01/2023" ,
scale : 27

health_calc.pregnancy(date, scale )
```

the result is :

```js
{
  currentWeek: '12',
  currentDate: '22/03/2023',
  conceivedBaby: '14/01/2023',
  pregnancyPercentage: '29',
  trimester: 'First Trimester',
  milestone: 'No milestone reached'
}
```

## 2. Pregnancy Weight Gain Calculator

| Parameter       | Type     | Description                                                     |
| :-------------- | :------- | :-------------------------------------------------------------- |
| `currentWeight` | `number` | **Required**. currentWeight of a person                         |
| `weight`        | `number` | **Required**. weight of a person                                |
| `weightType`    | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`        | `number` | **Required**. height of a person                                |
| `heightType`    | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
currentWeight : 56,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.pregnancyWeightGain(currentWeight, weight, weightType, height, heightTypes)
```

The result is :

```js
["1233.06 (Obese)", "58.97 kg", "30.7 kg - 33.1 kg"];
```

## 3. Conception Calculator

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `date`    | `string` | **Required**. First Day of Your Last Period    |
| `scale`   | `number` | **Required**. Average Length of Cycles (22-44) |

#### Example :

```js
date : "01/01/2023" ,
scale : 25

health_calc.conception(date, scale )
```

the result is :

```js
["07/01/2023 - 12/01/2023"];
```

## 4. Estimate Delivery Date Calculator

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `date`    | `string` | **Required**. First Day of Your Last Period    |
| `scale`   | `number` | **Required**. Average Length of Cycles (22-44) |

#### Example :

```js
date : "01/01/2023" ,
scale : 27

health_calc.estimateDate(date, scale )
```

the result is :

```js
 {
  estimateDeliveryWeek: '40',
  estimateDeliveryDate: '07/10/2023',
  currentWeek: '12',
  currentDate: '22/03/2023',
  conceivedBaby: '14/01/2023',
  pregnancyPercentage: '29',
  trimester: 'First Trimester',
  milestone: 'No milestone reached'
}
```

## 5. Ovulation Calculator

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `date`    | `string` | **Required**. First Day of Your Last Period    |
| `scale`   | `number` | **Required**. Average Length of Cycles (22-44) |

#### Example :

```js
date : "01/01/2023" ,
scale : 25

health_calc.ovulation(date, scale )
```

the result is :

```js
["07/01/2023 - 11/01/2023", "09/01/2023"];
```

## 6. Period Calculator

| Parameter     | Type     | Description                                    |
| :------------ | :------- | :--------------------------------------------- |
| `startdate`   | `string` | **Required**. First Day of Your Last Period    |
| `periodDays`  | `number` | **Required**. How long did it last? (1-10)     |
| `cycleLength` | `number` | **Required**. Average Length of Cycles (22-44) |
| `month`       | `number` | **Required**. Upcoming Months.                 |

#### Example :

```js
date : "01/01/2023",
periodDays : 5,
cycleLength : 22,
month : 6

health_calc.period(date, periodDays , cycleLength , month )
```

the result is :

```js
[
  {
    period: "1/1/2023 - 1/5/2023",
    mostProbableOvulationDays: "1/7/2023 - 1/11/2023",
  },
  {
    period: "1/23/2023 - 1/27/2023",
    mostProbableOvulationDays: "1/29/2023 - 2/2/2023",
  },
  {
    period: "2/14/2023 - 2/18/2023",
    mostProbableOvulationDays: "2/20/2023 - 2/24/2023",
  },
  {
    period: "3/8/2023 - 3/12/2023",
    mostProbableOvulationDays: "3/14/2023 - 3/18/2023",
  },
  {
    period: "3/30/2023 - 4/3/2023",
    mostProbableOvulationDays: "4/5/2023 - 4/9/2023",
  },
  {
    period: "4/21/2023 - 4/25/2023",
    mostProbableOvulationDays: "4/27/2023 - 5/1/2023",
  },
];
```

# Other

## 1. Macro Calculator

| Parameter    | Type     | Description                                         |
| :----------- | :------- | :-------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                    |
| `goal`       | `string` | **Required**. goal (Bulking or Cutting) of a person |
| `weight`     | `number` | **Required**. weight of a person                    |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person |

#### Example :

```js
gender : "Male",
goal : "Cutting"
weight : 55,
weightType : "Pound"

health_calc.macro(gender, goal, weight, weightType)
```

the result is :

```js
[121.25, "30.9375 g", 123.75, "-0.75", "-0.08 g", "-0.4375 g"];
```

## 2. Carbohydrate Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `age`        | `number` | **Required**. age of a person                                   |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `  | `number` | **Required**. No. of days (0-7) person do exercise              |

#### Example :

```js
gender : "Male" ,
age : 26,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches",
exercise : 1

health_calc.carbohydrate(gender, age, weight, weightType, height, heightTypes , exercise )
```

the result is :

```js
["299.04", "37.38 g", "33.64 g - 48.59 g"];
```

## 3. Protein Calculator

| Parameter    | Type     | Description                                                                                                                                     |
| :----------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                                                                                                |
| `weight`     | `number` | **Required**. weight of a person                                                                                                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person                                                                                             |
| `activity`   | `string` | **Required**. activity (Sedentary adults, Endurance athletes , Strength athletes or Pregnant and lactating women (only for female)) of a person |

#### Example :

```js
activity : "Sedentary adults",
gender : "Male"
weight : 55,
weightType : "Pound"

health_calc.protein(gender, weight, weightType, activity)
```

the result is :

```js
"19.80 grams";
```

## 4. Fat Intake Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `age`        | `number` | **Required**. age of a person                                   |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `  | `number` | **Required**. No. of days (0-7) person do exercise              |

#### Example :

```js
gender : "Male" ,
age : 26,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches",
exercise : 1

health_calc.fat(gender, age, weight, weightType, height, heightTypes , exercise )
```

the result is :

```js
["299.04", "9.97 g", "6.65 g - 11.63 g"];
```

## 5. TDEE Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                                |
| `age`        | `number` | **Required**. age of a person                                   |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `  | `number` | **Required**. No. of days (0-7) person do exercise              |

#### Example :

```js
gender : "Male" ,
age : 26,
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches",
exercise : 1

health_calc.tdee(gender, age, weight, weightType, height, heightTypes , exercise )
```

the result is :

```js
"293.70 kcal/day";
```

## 6. GFR Calculator

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `gender`  | `string` | **Required**. gender of a person                     |
| `age`     | `number` | **Required**. age of a person                        |
| `Scr`     | `number` | **Required**. Scr of a person                        |
| `color`   | `string` | **Required**. color (Black or Not Black) of a person |

#### Example :

```js
Color : "Black",
gender : "Male"
Scr : 55,
age : 26

health_calc.protein(gender, age, Scr, Color)
```

the result is :

```js
"123.62 mL/min/1.73 m2";
```

## 7. Body Type Calculator

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `gender`  | `string` | **Required**. gender of a person             |
| `type`    | `string` | **Required**. type (cm , inches) of a person |
| `bust`    | `number` | **Required**. bust size of a person          |
| `waist`   | `number` | **Required**. waist size of a person         |
| `neck`    | `number` | **Required**. neck size of a person          |
| `hips`    | `number` | **Required**. hips size of a person          |
| `highHip` | `number` | **Required**. highHip size of a person       |

#### Example :

```js
gender : "Male" ,
waist : 32,
bust : 34,
neck : 6,
type : "inches",
hip : 34,
highHip : 34

health_calc.bodyType(gender, type, bust, waist, neck, hip, highHip)
```

the result is :

```js
["Hourglass", "0.71 (  Low Health Risk ) "];
```

## 8. Body Surface Area Calculator

| Parameter    | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `weight`     | `number` | **Required**. weight of a person                                |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person             |
| `height`     | `number` | **Required**. height of a person                                |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example :

```js
weight : 55,
weightType : "Pound",
height : 5.6,
heightType : "Inches"

health_calc.bsa(weight, weightType, height, heightTypes)
```

the result is :

```js
"0.19 m2";
```

## 9. BAC Calculator

| Parameter    | Type     | Description                                                 |
| :----------- | :------- | :---------------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                            |
| `weight`     | `number` | **Required**. weight of a person                            |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person         |
| `alcohol`    | `number` | **Required**. alcohol taken by a person                     |
| `time`       | `number` | **Required**. time taken by a person                        |
| `timeType`   | `string` | **Required**. timeType (hr , min or sec ) taken by a person |

#### Example :

```js
gender : "Male" ,
alcohol : 26,
weight : 55,
weightType : "Pound",
time : 5.6,
timeType : "hr"

health_calc.tdee(gender, weight, weightType, alcohol, time , timeType )
```

the result is :

```js
10.24;
```

## License

[GNU General Public License v3.0](https://github.com/Widle-Studio/health-calculations/blob/main/LICENSE)
