# Health Calculations

[![Version](https://img.shields.io/npm/v/@widlestudiollp/health-calculation.svg)](https://www.npmjs.org/package/@widlestudiollp/health-calculation) 

[![Downloads](https://img.shields.io/npm/dm/@widlestudiollp/health-calculation.svg)](https://www.npmjs.com/package/@widlestudiollp/health-calculation)

[![Try on RunKit](https://badge.runkitcdn.com/@widlestudiollp/health-calculation.svg)](https://runkit.com/npm/@widlestudiollp/health-calculation)


## Installation

Install the package with:

```sh
npm install @widlestudiollp/health-calculation --save
# or
yarn add @widlestudiollp/health-calculation
```

## Fitness
1. BMI Calculator
2. Body Fat Calculator
3. BMR Calculator
4. Ideal Weight Calculator
5. Pace Calculator
6. Army Body Fat Calculator
7. Calorie Calculator
8. Lean Body Mass Calculator
9. Healthy Weight Calculator
10. Calories Burned Calculator

## Pregnancy
1. Pregnancy Calculator
2. Pregnancy Weight Gain Calculator
3. Conception Calculator
4. Due Date Calculator
5. Ovulation Calculator
6. Period Calculator

## Other
1. Macro Calculator
2. Carbohydrate Calculator
3. Protein Calculator
4. Fat Intake Calculator
5. TDEE Calculator
6. GFR Calculator
7. Body Type Calculator
8. Body Surface Area Calculator
9. BAC Calculator
# Fitness 

## 1. BMI

| Parameter         | Type     | Description                      |
| :------------     | :------- | :------------------------------- |
| `weight`          | `number` | **Required**. weight of a person |
| `weightType`      | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`          | `number` | **Required**. height of a person |
| `heightType`      | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.bmi(Weights, Weight_Types, Heights, Height_Types) 
```

## 2. Body-Fat


| Parameter         | Type     | Description                      |
| :------------     | :------- | :------------------------------- |
| `gender`          | `string` | **Required**. gender of a person |
| `age`             | `number` | **Required**. age of a person    |
| `weight`          | `number` | **Required**. weight of a person |
| `weightType`      | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`          | `number` | **Required**. height of a person |
| `heightType`      | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Gender : "Male" ,
Age : 26,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.body_fat(Gender,Age,Weights, Weight_Types, Heights, Height_Types)
```

## 3. BMR


| Parameter         | Type     | Description                      |
| :------------     | :------- | :------------------------------- |
| `gender`          | `string` | **Required**. gender of a person |
| `age`             | `number` | **Required**. age of a person    |
| `weight`          | `number` | **Required**. weight of a person |
| `weightType`      | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`          | `number` | **Required**. height of a person |
| `heightType`      | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Gender : "Male" ,
Age : 26,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.bmr(Gender,Age,Weights, Weight_Types, Heights, Height_Types)
```

## 4. Ideal-Weight


| Parameter         | Type     | Description                      |
| :------------     | :------- | :------------------------------- |
| `weight`          | `number` | **Required**. weight of a person |
| `weightType`      | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`          | `number` | **Required**. height of a person |
| `heightType`      | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.idealWeight(Weights, Weight_Types, Heights, Height_Type) 
```

## 5. Pace


| Parameter         | Type     | Description                                 |
| :------------     | :------- | :-------------------------------            |
| `distance`        | `number` | **Required**. distance covered by a person. |
| `distanceType`    | `string` | **Required**. distanceType (miles , kms , meters) covered by a person.|
| `time`            | `number` | **Required**. time taken by a person        |
| `timeType`        | `string` | **Required**. timeType (sec , min , hour) covered by a person.|

#### Example : 
```js
Distances : 55,
Distance_Types : "miles",
Times : 5.6,
Time_Type : "min"

health_calc.pace(Distances, Distance_Types, Times, Time_Type)
``` 

## 6. Army Body-Fat


| Parameter    | Type     | Description                             |
| :----------- | :------- | :-------------------------------        |
| `gender`     | `string` | **Required**. gender of a person        |
| `height`     | `number` | **Required**. height of a person        |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `waist`      | `number` | **Required**. waist size of a person    |
| `neck`       | `number` | **Required**. neck size of a person     |
| `sizeType`   | `string` | **Required**. sizeType (Meters , Inches) of a person |
| `hip`        | `number` | **Required**. hip size of a Female only |

#### Example : 
```js
Gender : "Female" ,
Heights : 5.6,
Height_Type : "Inches",
Waist : 5,
Neck : 6,
Type : "Inches",
Hip : 8

health_calc.armyBody(Gender, Heights, Height_Types, Waist, Neck, Type, Hip)
```

## 7. Calorie


| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `gender`      | `string` | **Required**. gender of a person |
| `age`         | `number` | **Required**. age of a person    |
| `weight`      | `number` | **Required**. weight of a person |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`      | `number` | **Required**. height of a person |
| `heightType`  | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `   | `number` | **Required**. No. of days (0-7) person do exercise |

#### Example : 
```js
Gender : "Male" ,
Age : 26,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches",
Exercise : 1

health_calc.calorie(Gender,Age,Weights, Weight_Types, Heights, Height_Types , Exercise )
```

## 8. LBM 


| Parameter    | Type     | Description                      |
| :------------| :------- | :------------------------------- |
| `gender`     | `string` | **Required**. gender of a person |
| `weight`     | `number` | **Required**. weight of a person |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`     | `number` | **Required**. height of a person |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Gender : "Male",
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.lbm(Gender, Weights, Weight_Types, Heights, Height_Types) 
```

## 9. Healthy Weight


| Parameter    | Type     | Description                      |
| :------------| :------- | :------------------------------- |
| `weight`     | `number` | **Required**. weight of a person |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`     | `number` | **Required**. height of a person |
| `heightType` | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.healthyWeight(Weights, Weight_Types, Heights, Height_Types) 
```

## 10. Calories Burn


| Parameter     | Type     | Description                                         |
| :------------ | :------- | :-------------------------------------------------- |
| `activity`    | `string` | **Required**. activity(Sleeping, Walking, Eating, Running, Other Heavy Work , Other Light Work) done by person               |
| `weight`      | `number` | **Required**. weight of a person                    |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |

#### Example : 
```js
Activity : "Sleeping"
Weights : 55,
Weight_Types : "Pound"

health_calc.caloriesBurn(Activity, Weights, Weight_Types) 
```

# Pregnancy

## 1. Pregnancy Calculator 
       **Upcoming** 
## 2. Pregnancy Weight Gain Calculator



| Parameter      | Type     | Description                      |
| :------------  | :------- | :------------------------------- |
| `currentWeight`| `number` | **Required**. currentWeight of a person |
| `weight`       | `number` | **Required**. weight of a person |
| `weightType`   | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`       | `number` | **Required**. height of a person |
| `heightType`   | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Current Weight : 56,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.pregnancyWeightGain(Current Weight, Weights, Weight_Types, Heights, Height_Types) 
```

## 3. Conception Calculator

| Parameter| Type     | Description                                    |
| :--------| :------- | :--------------------------------------------- |
| `date`   | `string` | **Required**. First Day of Your Last Period    |
| `scale`  | `number` | **Required**. Average Length of Cycles (22-44) |

#### Example : 
```js
Date : "01/01/2023" ,
Length of cycle : 25

health_calc.conception(Date, Length of cycle ) 
```

## 4. Due Date Calculator
         **Upcoming**
## 5. Ovulation Calculator

| Parameter| Type     | Description                                    |
| :--------| :------- | :--------------------------------------------- |
| `date`   | `string` | **Required**. First Day of Your Last Period    |
| `scale`  | `number` | **Required**. Average Length of Cycles (22-44) |

#### Example : 
```js
Date : "01/01/2023" ,
Length of cycle : 25

health_calc.ovulation(Date, Length of cycle ) 
```

## 6. Period Calculator


| Parameter    | Type     | Description                                    |
| :------------| :------- | :--------------------------------------------- |
| `startDate`  | `string` | **Required**. First Day of Your Last Period    |
| `periodDays` | `number` | **Required**. How long did it last? (1-10)     |
| `cycleLength`| `number` | **Required**. Average Length of Cycles (22-44) |
| `month`      | `number` | **Required**. Upcoming Months.                 |

#### Example : 
```js
Date : "01/01/2023",
Last Period Days : 5,
Length of cycle : 26,
Months : 6

health_calc.period(Date, Last Period Days , Length of cycle , Months ) 
```

# Other

## 1. Macro Calculator

| Parameter    | Type     | Description                                         |
| :------------| :------- | :-------------------------------------------------- |
| `gender`     | `string` | **Required**. gender of a person                    |
| `goal`       | `string` | **Required**. goal (Bulking or Cutting) of a person |
| `weight`     | `number` | **Required**. weight of a person                    |
| `weightType` | `string` | **Required**. weightType (Pound or Kgs) of a person |

#### Example : 
```js
Gender : "Male",
Goal : "Cutting"
Weights : 55,
Weight_Types : "Pound"

health_calc.macro(Gender, Goal, Weights, Weight_Types) 
```
## 2. Carbohydrate Calculator

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `gender`      | `string` | **Required**. gender of a person |
| `age`         | `number` | **Required**. age of a person    |
| `weight`      | `number` | **Required**. weight of a person |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`      | `number` | **Required**. height of a person |
| `heightType`  | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `   | `number` | **Required**. No. of days (0-7) person do exercise |

#### Example : 
```js
Gender : "Male" ,
Age : 26,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches",
Exercise : 1

health_calc.carbohydrate(Gender, Age, Weights, Weight_Types, Heights, Height_Types , Exercise )
```
## 3. Protein Calculator

| Parameter     | Type     | Description                                         |
| :------------ | :------- | :-------------------------------------------------- |
| `gender`      | `string` | **Required**. gender of a person |
| `weight`      | `number` | **Required**. weight of a person                    |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `activity`    | `string` | **Required**. activity (Sedentary adults, Endurance athletes , Strength athletes or Pregnant and lactating women (only for female)) of a person |

#### Example : 
```js
Activity : "Sedentary adults",
Gender : "Male"
Weights : 55,
Weight_Types : "Pound"

health_calc.protein(Gender, Weights, Weight_Types, Activity) 
```
## 4. Fat Intake Calculator

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `gender`      | `string` | **Required**. gender of a person |
| `age`         | `number` | **Required**. age of a person    |
| `weight`      | `number` | **Required**. weight of a person |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`      | `number` | **Required**. height of a person |
| `heightType`  | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `   | `number` | **Required**. No. of days (0-7) person do exercise |

#### Example : 
```js
Gender : "Male" ,
Age : 26,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches",
Exercise : 1

health_calc.fat(Gender, Age, Weights, Weight_Types, Heights, Height_Types , Exercise )
```
## 5. TDEE Calculator

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `gender`      | `string` | **Required**. gender of a person |
| `age`         | `number` | **Required**. age of a person    |
| `weight`      | `number` | **Required**. weight of a person |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`      | `number` | **Required**. height of a person |
| `heightType`  | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |
| `exercise `   | `number` | **Required**. No. of days (0-7) person do exercise |

#### Example : 
```js
Gender : "Male" ,
Age : 26,
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches",
Exercise : 1

health_calc.tdee(Gender, Age, Weights, Weight_Types, Heights, Height_Types , Exercise )
```
## 6. GFR Calculator

| Parameter     | Type     | Description                                          |
| :------------ | :------- | :--------------------------------------------------- |
| `gender`      | `string` | **Required**. gender of a person                     |
| `age`         | `number` | **Required**. age of a person                        |
| `Scr`         | `number` | **Required**. Scr  of a person                       |
| `color`       | `string` | **Required**. color (Black or Not Black) of a person |

#### Example : 
```js
Color : "Black",
Gender : "Male"
Scr : 55,
Age : 26

health_calc.protein(Gender, Age, Scr, Color) 
```
## 7. Body Type Calculator

| Parameter  | Type     | Description                                      |
| :----------| :------- | :----------------------------------------------- |
| `gender`   | `string` | **Required**. gender of a person                 |
| `type`     | `string` | **Required**. type (cm , inches) of a person |
| `bust`     | `number` | **Required**. bust size of a person              |
| `waist`    | `number` | **Required**. waist size of a person             |
| `neck`     | `number` | **Required**. neck size of a person              |
| `hips`     | `number` | **Required**. hips size of a person              |
| `highHip`  | `number` | **Required**. highHip size of a person           |

#### Example : 
```js
Gender : "Female" ,
Waist : 5,
Bust : 6,
Neck : 6,
Type : "inches",
Hip : 8
High_Hip : 9

health_calc.bodyType(Gender, Type, Bust, Waist, Neck, Hip, High_Hip)
```
## 8. Body Surface Area Calculator

| Parameter         | Type     | Description                      |
| :------------     | :------- | :------------------------------- |
| `weight`          | `number` | **Required**. weight of a person |
| `weightType`      | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `height`          | `number` | **Required**. height of a person |
| `heightType`      | `string` | **Required**. heightType (Feet , Inches or Meters ) of a person |

#### Example : 
```js
Weights : 55,
Weight_Types : "Pound",
Heights : 5.6,
Height_Type : "Inches"

health_calc.bsa(Weights, Weight_Types, Heights, Height_Types) 
```

## 9. BAC Calculator

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `gender`      | `string` | **Required**. gender of a person |
| `weight`      | `number` | **Required**. weight of a person |
| `weightType`  | `string` | **Required**. weightType (Pound or Kgs) of a person |
| `alcohol`     | `number` | **Required**. alcohol taken by a person |
| `time`        | `number` | **Required**. time taken by a person |
| `timeType`    | `string` | **Required**. timeType (hr , min or sec ) taken by a person |

#### Example : 
```js
Gender : "Male" ,
Alcohol : 26,
Weights : 55,
Weight_Types : "Pound",
Time : 5.6,
Time_Type : "hr"

health_calc.tdee(Gender, Weights, Weight_Types, Alcohol, Time , Time_Type )
```
