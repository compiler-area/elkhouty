#include <iostream>
#include <fstream>
#include <cstdlib>
#include <string>
#include <iterator>
#include <windows.h>
#include<conio.h>
#include<stdlib.h>
#include<iomanip>

using namespace std;

int main(){
	char chos ;
	string directoryname;

	for( ; ; ){
		cout<<"\nchoose what you want \n " <<"location = l "<<"\n"<<" how many commits = h \n "<<"make full project = d \n "<<"push = p "<<"\n";
		cin>>chos;
		switch(chos){
			case 'e':
				return 0;
			case 'l' :
				system("cd");
				break;
				
			case 'd' :
				cout<<"enter project name :";
				cin>>directoryname;
				system(("mkdir " + directoryname).c_str());
				system(("cd " + directoryname + " &&  git clone https://github.com/compiler-area/compiler-demo.git" ).c_str());
//				system(("cd " + directoryname + " && mkdir css js json && type nul > index.html" ).c_str());
//				system(("cd " + directoryname + " && cd css && type nul > style.css").c_str());
//				system(("cd " + directoryname + " && cd js && type nul > style.js").c_str());
//				system(("cd " + directoryname + " && cd json && type nul > json.json").c_str());
//				cout<<"\n created the ordered files \n css \n js \n json \n index.html \n\n";
				break;
				
			case 'h' :
				system("git rev-list --count HEAD");
				break;
			
			case 'p' :
				int x = system("git rev-list --count HEAD");
				char y = x;
				system("git add *");
				system("git commit -m new" + x);
				system("git push origin master");

				 break;
		}
	}
}
