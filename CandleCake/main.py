def birthdayCakeCandles(candles_heights):
    # [2,1,0,2,3,3,4]
    # 1
    max_height = 0
    counter = 0
    for height in candles_heights:
        if height > max_height:
            max_height = height
            counter = 1
        elif height == max_height:
            counter += 1

    return counter

if __name__ == "__main__":
    result = birthdayCakeCandles([3,-5,4,5,1,3,5])
    print(result)