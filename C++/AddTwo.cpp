#include <iostream>

struct Node{
  int val ; 
  Node* next ; 
};

class LinkedList{
  Node* head ; 
public:
  LinkedList() : head(nullptr){} 

  void print(){
    Node* tmp = head  ; 
    while(tmp != nullptr){
      std::cout << tmp->val << std::endl ; 
      tmp = tmp->next ; 
    }
  }

  void addNode( int val ){
    Node* newNode = new Node{ val , head } ; 
    head = newNode ; 
  }
};


int main () {
  LinkedList test = LinkedList() ; 
  test.addNode( 3 ) ; 
  test.addNode( 4 ) ; 
  test.print() ; 
  return 0;
}
