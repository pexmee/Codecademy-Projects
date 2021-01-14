#include <iostream>

int main(){
    int asdf[5];
    asdf[0] = 1;
    asdf[1] = 1;
    asdf[2] = 1;
    asdf[3] = 1;
    asdf[4] = 1;
    for(unsigned i = 0; i < 10; ++i){
        if(asdf[i] == '\0'){
            std::cout << "NULL" << std::endl;
            return 0;
        }
        else{
            std::cout << asdf[i] << std::endl;
        }
    }
}