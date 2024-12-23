"""Define the div-number of an array A[1..n] of n integers, n>=3, to be the number of elements A[i] that satisfy the condition A[i-1] >A[i+1],2≤i≤n-1.

a) Design an efficient divide and conquer algorithm to calculate the div-number of a given array.
b) What is the basic operation for your algorithm?

c) Show the recurrence for the number of times your algorithm performs the basic operation in the worst case.

d) Use the Master Theorem to find the big-Theta time efficiency of your algorithm. 

    Explain your answer by showing the values of a, b, and d, and indicating which case of the theorem you applied."""



array = [ 3 , 2 , 1 , 6 , 5 , 4 ,  7 , 9 , 8 , 2 , 4 , 1] 






def DivideNumber( A ) : 
    if len(A) == 3 : 
        if A[0] > A[2] : 
            return 1
        else : 
            return 0 
    else : 
        left = DivideNumber(A[:len(A) // 2 ]) 
        right = DivideNumber(A[(len(A) // 2 ) :]) 
        return left + right 
test = DivideNumber(array)

print(test)


