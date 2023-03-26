//loop 
var array=[1,2,3]
var small=array[0],large=array[0];
for(var i=0;i<array.length;i++)
{
	if(array[i]<small)
	{
		small=array[i];
	}
	if(array[i]>large)
	{
		large=array[i];
	}
}

document.write("smallest number is"+small+"<br>"+"large number"+large);

