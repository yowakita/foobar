## Intro to bitwise operators:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

## What is `XOR` (operator: `^`)? 
`Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1's.`

https://hackernoon.com/xor-the-magical-bit-wise-operator-24d3012ed821

XOR Example:
```
    val = x ^ y
    x = 5 =  0101 // 5 is 0101 in binary
    y = 2 =  0010
    Different ↑↑↑
    (Set bit to 1 if different, 0 if same)
    val = 0111 = 7
```

## What is bitwise `AND` (operator: `&`) ?

`Returns a 1 in each bit position for which the corresponding bits of both operands are 1's.`

AND Example:
```
    val = x & y
    x = 7 =  0111
    y = 2 =  0010
    Same       ↑
    (Set bit to 1 if both are 1, 0 if not)
    val = 0010 = 2
```