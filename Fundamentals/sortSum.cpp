#include <iostream>
#include <vector>

// Algorithm : sortedSum[P , K]
// Computes the concatenated sum of two arrays 
// Input : Two distinct sorted arrays of length m and n 
// Output : Singular array of length m+n 

int main() {
    std::vector<int> P = { 2, 5, 7, 12, 13, 24 };
    std::vector<int> K = { 1, 6, 15, 17, 35 };

    int l = 0, j = 0;
    std::vector<int> retList;

    // Merge both sorted arrays
    while (l < P.size() && j < K.size()) {
        if (P[l] < K[j]) {
            retList.push_back(P[l]);
            l++;
        }
        else {
            retList.push_back(K[j]);
            j++;
        }
    }

    // Add remaining elements from P if any
    while (l < P.size()) {
        retList.push_back(P[l]);
        l++;
    }

    // Add remaining elements from K if any
    while (j < K.size()) {
        retList.push_back(K[j]);
        j++;
    }

    // Print the resulting array
    for (int num : retList) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
