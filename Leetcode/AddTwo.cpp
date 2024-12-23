#include <iostream>

struct Node {
    int val;
    Node* next;
};

class LinkedList {
    Node* head; // Private member

public:
    LinkedList() : head(nullptr) {}

    // Method to add a node at the beginning
    void addNode(int value) {
        Node* newNode = new Node{value, head};
        head = newNode;
    }

    // Method to traverse and print the list
    void traverse() {
        if (head == nullptr) {
            std::cout << "The list is empty." << std::endl;
            return;
        }

        Node* current = head;
        while (current != nullptr) {
            std::cout << current->val << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }
};

int main() {
    std::cout << "C++ Refresher before capstone" << std::endl;

    LinkedList test;
    test.addNode(10); // Add a node with value 10
    test.addNode(20); // Add another node with value 20
    test.traverse();  // Print the list

    return 0;
}
