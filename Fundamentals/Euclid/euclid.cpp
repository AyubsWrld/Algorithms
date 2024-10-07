#include <iostream>

int euclid(int m, int n) {
    if (n == 0) {
        return m; 
    } else {
        return euclid(n, m % n); // Use n instead of k
    }
}

int main() {
    int x = 30; 
    int y = 24; 
    int j = euclid(x, y); 
    std::cout << j << std::endl; 
    return 0; 
}
