#include <iostream> 
#include <string.h> 


std::string hello(){
	return "Hello world" ; 
}



int main(){ 
	std::string retVal = hello() ; 
	std::cout << retVal << std::endl ; 
	return 0 ; 
}
