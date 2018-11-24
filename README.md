# react-native-animated-entrance
✨ Subtle animation wrapper for your React component

## Introduction
A lightweight wrapper for React Native. Animate a component's entrance using translate and opacity individually.

Note this is designed for subtle enhancements to your app, it is not a comprehensive animation library.

## Demo

| Original   | Slow Motion |
|     :---:      |          :---:  |
 | <img src="https://raw.githubusercontent.com/cewpur/react-native-animated-entrance/master/asset/original.gif" />  | <img src="https://raw.githubusercontent.com/cewpur/react-native-animated-entrance/master/asset/slowmo.gif" />

(necessary compression spoiled the quality and frame rate)

## Installation
```npm i -S react-native-animated-entrance```

## Usage

```js
// Animating contents of e.g. ```Flatlist``` - the index is used to calculate the cascade order

renderItem = (info) => {
  return (
    <AnimatedEntrance
      axis={AnimatedEntrance.axis.vertical}
      offset={20}
      duration={900}
      order={info.index + 1}
    >
      <Image .../>
    </AnimatedEntrance>
  );
}

```

Order can be used as an easier form of delaying e.g. having components ordered as 1, 1.5, 2, ...

Protip: match the duration and delay props for 0 overlap. Setting the order to 0 will play no animation.


## Props
| Name         | Description    | Default       |
| :---         |     :---:      |          ---: |
| order       | Position of element in collection, used to calculate delay (1 for immediate)  | 1             |
| duration  | Animation duration (ms) | 400
| axis      | Axis prop types, corresponds to React Native Animated's translation | horizontal (translateX)
| offset  |   Translation offset  | 20* 
| delay | Delay of the animation launch (ms) | 0

\* Negative offsets are also permitted

Offset and duration can be combined in declaring the 'velocity' of the animation
