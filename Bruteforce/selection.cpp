#include <iostream>

int main() {
    int array[6] = { 4, 1, 3, 13, 2, 8 };

    // Outer loop: iterate over each element in the array
    for (int i = 0; i < 6 - 1; i++) {
        int minPos = i;  // Assume the current position holds the smallest value

        // Inner loop: find the smallest element in the unsorted portion
        for (int j = i + 1; j < 6; j++) {
            if (array[j] < array[minPos]) {
                minPos = j;  // Update the position of the smallest value
            }
        }

        // Swap the smallest element with the element at the current position
        if (minPos != i) {
            int tmp = array[i];
            array[i] = array[minPos];
            array[minPos] = tmp;
        }
    }

    // Print the sorted array
    for (auto i : array) {
        std::cout << i << std::endl;
    }

    return 0;
}
