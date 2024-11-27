                    // Chapter 21-25

//Question 01

// var firstName = prompt('Enter your first name?')
// var lastName = prompt('Enter your last name?')
// var fullName = firstName + " " + lastName
// console.log('Hi!' , fullName)

// Question 02

// var fav_Mobile = prompt('Enter your Favourite mobile?')
// console.log('Favourite mobile :' ,fav_Mobile)
// for (var i = 0; i < fav_Mobile.length; i++) {
// }
// console.log('Length of mobile :', i)

// Question 03

// var random = 'pakistani'
// console.log('string :' , random)
// var result = random.indexOf('n')
// console.log('Index of n : ' , result)

// Question 04

// var random = 'Hello World'
// console.log('string :' , random)
// var result = random.lastIndexOf('l')
// console.log('Index of l : ' , result)

// Question 05

// var random = 'Pakistani'
// console.log('string :' , random)
// var result = random.charAt(3)
// console.log('char at index 3 : ' , result)

// Question 07

// var city = 'hyderabad'
// console.log('Before replacement :' , city)
// var replace_city = city.replace('hyder' , 'Islam')
// console.log('After replacement :' , replace_city)

// Question 08

// var message = 'Ali and Sami are best friends. They play cricket and football together'
// console.log('message :' , message)
// for(var i = 0 ; i < message.length ; i++){
//     if(message[i] == 'and'){
//         var result = message.replace('and' ,'&')
//     }
// }
// console.log(result)

// Question 09

// var num = '472'
// console.log(num , 'This is' ,typeof num)
// var result = Number(num)
// console.log(result , 'This is ' + typeof result)

// Question 10

// var user_input = prompt('Do you like? peanut , cocunut , almond , walnut , pistachio')
// var result = user_input.toUpperCase()
// console.log('You choose' , result)

// Question 11

// var input = 'javascript'
// console.log('original string :' , input)
// var result = input[0].toUpperCase()
// var final_result = result + input.slice(1 , input.length)
// console.log('capitalize string :' , final_result)

// Question 12

// var num = 35.36
// var str = num.toString()
// console.log(str.replace('.' ,''))

// Question 13

//  var username = prompt('Enter a Username?')
// if(username.charCodeAt() == 34 || username.charCodeAt() == 44 || username.charCodeAt() == 46 || username.charCodeAt() == 64){
//     prompt('enter valid password')  
// }
// else{
//     console.log('HEY' , username)
// }
        
        
// Question 14


// var user_choice = prompt('What do you want?')
// var arr = ['cake' , 'apple pie' ,  'cookie' ,  'chips' ,  'patties' ]
// var flag = false
// for(var i = 0 ; i < arr.length ; i++){
//     if(user_choice == arr[i]){
//         flag = true
//         break
//  }
        
// }
// if(flag){
//     console.log(user_choice , 'is available at index' , i , 'in our bakkery')
// }
// else{
//     console.log(user_choice, 'is not available')
// }

// Question 15

// var password = prompt('Enter a Password?')
// var a = ''
// for (var i = 0; i < password.length; i++) {
//    if(i == 0 || password.charCodeAt(i - 1) == 32){
//         if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57){
//             prompt('Enter a valid password')
//         }
//         else{
//             a += password[i]
//         }
//    }
//    else(
//         a += password[i]
//    )
// }

// console.log(a)

        
// Question 16

// var university = 'University of Karachi'
// var a = ''
// for(var i = 0 ; i  < university.length ; i++){
//     a += university[i]
//     console.log(a)
//     var a = ''
// }   


// Question 17

// var user = prompt('Enter your value')
// if(user.length > 0){
//     var last_char = user[user.length-1]
//     console.log(last_char)
// }
// else{
//     console.log('You does not enter a value')
// }
    
// Question 18

// var str = '“The quick brown fox jumps over the lazy dog'
// var flag = false
// var count = 0
// for(var i = 0 ; i < str.length ; i++){
//     if(str.slice(i , i+3).toLowerCase() == 'the'){
//         count += 1
//         flag = true
//     }
// }
// if(flag){
//     console.log('There are', count ,'occurence of word')
// }
// else{
//     console.log('sorry')
// }

                        // Chapter 26-30
                        
                        // Question 01
                        
// var num = prompt('Enter a positive integer?')
// console.log('number :' , num)
// console.log('round off value :' , Math.round(num))
// console.log('floor value :' , Math.floor(num))
// console.log('ceil value :' , Math.ceil(num))

// Question 02

// var num = prompt('Enter a negative integer?')
// console.log('number :' , num)
// console.log('round off value :' , Math.round(num))
// console.log('floor value :' , Math.floor(num))
// console.log('ceil value :' , Math.ceil(num))

// Question 03

// var number = prompt('Enter number')
// console.log('Actual value :' , number)
// console.log('Absolute Value :' , Math.abs(number))

// Question 04

// var ran = Math.random()*6
// console.log('Random Dice Value : ', Math.round(ran))

// Question 05

// var ran_num = Math.round(Math.random())
// var user_choice = prompt('What you want || 0 for Heads || 1 For Tails' )
// if(user_choice == ran_num){
    //     console.log('Random Coin Value : Heads')
    // }
    // else{
        //     console.log('Random Coin Value : Tails')
        // }
        // console.log('it was' , ran_num)
        
        // Question 06
        
        // var num = Math.round(Math.random()*100)
        // console.log(num)
        
        // Question 07
        
        // var inp_weight = prompt('Enter your weight?') 
        // console.log('The wait of user :',parseFloat(inp_weight) , 'kilograms')

// Question 08

// var num = Math.round(Math.random()*10)
// var guess = prompt('Guess the number b/w 1 and 10?')

// if(guess == num){
//     console.log('Congratulations!!')
// }
// else{
//     console.log('Try Again :)')
// }

// console.log('The number was' , num)
                    
                                           
                            // Chapter 31-34
 
 // Question 01
 
 // var curr_time = new Date()
 // console.log(curr_time)
 
 // Question 02
 
 // var time = new Date()
 // var month = time.getMonth()
 
 // var arr = ['january' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'Octuber' , 'November' , 'December']
                            
// for(var i = 0 ; i < arr.length ; i++){
//     if(month == i){
//         break;
//     }
// }
// console.log('Current Month :' , arr[i])

// Question 03

// var time = new Date()
// var day = time.getDay()
// var arr = ['Sun' , 'Mon' , 'Tues' ,'Wed' , 'Thurs' , 'Fri' , 'Sat']

// for(var i = 0 ; i < arr.length ; i++){
    //     if(day == i){
        //         break;
        //     }
        // }
        // console.log('Current Month :' , arr[i])
        
        // Question 04
        
        // var time = new Date()
        // var day = time.getDay()
        
        // if(day == 0 || day == 6){
            //     console.log('It is funday')
            // }
            // else{
                //     console.log('Working day')
                // }
                
                // Question 05
                // var current = new Date()
                // var dayOfMonth = current.getDate()

                // if(dayOfMonth < 16){
//     console.log('First fifteen days of month')
// }
// else{
    //     console.log('last days of month')
    // }
    
    // Question 06
    
    // var dob = '1 jan 1970'
    // var curr_time = new Date()
    // var past_time = new Date(dob)
    // var actual_time = curr_time.getTime() - past_time.getTime()
    // console.log('Current Date :' , curr_time)
    // console.log('Milliseconds since 1 january 1970:',actual_time)
    // console.log('Minutes since 1 january 1970:' , actual_time / 1000 * 60)
    
    // Question 07

// var time = new Date()
// var hour = time.getHours()
// var min = time.getMinutes()
// if(hour >= 0 && hour < 12){
    //     console.log('It is' , hour , ':' , min ,'AM')
    // }
// else{
    //     console.log('It is' , hour , ':' , min ,'PM')
    // }
    
    // Question 08
    
    // var date = '31 dec 2024'
    // var later_date = new Date(date)
    // console.log(later_date)
    
    // Question 09
    
    // var ramadan = '12 march 2024'
    // var curr_time = new Date()
    // var past_time = new Date(ramadan)
    
    // var total_days = curr_time.getTime() - past_time.getTime()
    // console.log(Math.round(total_days/(1000*3600*24)),'days have passed since 1st ramadam 2024')
    
    // Question 10
    
    // var ramadan = '1 jan 2024'
    // var curr_time = new Date()
    // var past_time = new Date(ramadan)
    // var total_days = curr_time.getTime() - past_time.getTime()
    // console.log('On refrence date',curr_time,Math.round(total_days/(1000)),'seconds had passed since beginning of 2024')
    
    // Question 11
    
    // var cur = new Date()
    // var time = new Date()
    // var hour = time.getHours()
// var min = time.getMinutes()
// var change = hour - 1
// var new_time = new Date(change)
// console.log(cur,'1 hour ago, it was' , change ,':', min)

// Question 12

// var cur = new Date()
// var time = new Date()
// var year = time.getFullYear()
// var change = year - 100
// var new_time = new Date(change)
// console.log(cur,'100 years ago, it was' , change )

// Question 13

// var dob = prompt('Enter Your dob')
// var cur = new Date()
// var Dob = new Date(dob)
// var Dob_year = Dob.getFullYear()
// var total_time = cur.getTime() - Dob.getTime()
// console.log('Your age is :',Math.round(total_time/(1000*3600*24*31*12)))
// console.log('Your birth year :',Dob_year)

// Question 14
// console.log('-------- K-Electric Bill--------')
// var cust_name = prompt('Enter your name?')
// console.log('\nCustomer Name :' , cust_name)
// var time = new Date()
// var month = time.getMonth()
// var arr = ['january' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'Octuber' , 'November' , 'December']
// for(var i = 0 ; i < arr.length ; i++){
    //     if(month == i){
        //         break;
        //     }
        // }
        // console.log('Current Month :' , arr[i])
        // var unit = 400
        // console.log('Number of Units :' , unit)
        // var per_unit = 10
        // console.log('Charges per unit :' , per_unit)
        // var net_amount = unit * per_unit
        // console.log('Net Amount Payable (within Due Date) :' , net_amount)
        // var late_charges = 500
        // console.log('Late Charges : ',late_charges)
        // console.log('Gross Amount Payable (after Due Date) :' , late_charges + net_amount)
        
        
                    // Chapter 35-38

// Question 01

// function myfun(){
//     var current = new Date()
//     console.log(current)
// }
// myfun()

// Question 02

// function myfun(first_name,last_name){
//     var fullName = first_name + ' ' + last_name
//     console.log(fullName)
// }
// myfun(prompt('Enter first name :'),prompt('Enter last name :'))

// Question 03

// var num1 = +prompt('Enter first number : ')
// var num2 = +prompt('Enter second number : ')
// function adding_two_numbers(num1,num2){
//     sum = num1 + num2
//     return sum
// }
// console.log(adding_two_numbers(num1,num2))

// Question 04

// var nu1 = +prompt('Enter first number : ')
// var oper = prompt('Enter operator(+ , - , x , /) :')
// var nu2 = +prompt('Enter second number : ')
// function calculator(num1, operator , num2){
//     if(operator == '+'){
//         console.log(num1 + num2)
//     }
//     else if(operator == '-'){
//         console.log(num1 - num2)
//     }
//     else if(operator == 'x'){
//         console.log(num1 * num2)
//     }
//     else if(operator == '/'){
//         console.log(num1 / num2)
//     }
//     else{
//         console.log('Invalid Input')
//     }
// }
// calculator(nu1 , oper , nu2)

// Question 05

// function square(num){
//     return num * num
// }
// console.log(square(6))

// Question 06

// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(4))

// Question 07

// function count(start,end){
//     if(start > end){
//         console.log('Start number should be less than or equal to the end number')
//         return
//     }
//     for(var i = start ; i <= end ; i++){
//         console.log(i)
//     }
// }
// console.log(count(5,50))
    
// Question 08

// Arguements as value

// function AreaOfRectangle(length,width){
//     return length * width
// }
// console.log(AreaOfRectangle(4,8))

// Arguements as variable

// var len = 3
// var wid = 6
// function AreaOfRectangle(length,width){
//     return length * width
// }
// console.log(AreaOfRectangle(len,wid))
    
// Question 09

// var str = 'the quick brown fox'

// function myfun(str){
//     var a = ''
// var arr = []

// for(var i = 0 ; i < str.length ; i++){
//     a += str[i]
//     if(str[i] == ' '){
//         var cap = a[0].toUpperCase()
//         var new_string = cap + a.slice(1,a.length)
//         arr.push(new_string)
//         var a = ''
//     }
// }
// if(a){
//     var cap = a[0].toUpperCase()
//     var new_string = cap + a.slice(1,a.length)
//     arr.push(new_string)
// }
// console.log(arr.toString())
// }

// myfun(str)

// Question 12

// var str = 'Web Development Tutorial'
// var long_word = str[0]
// var a = ''
// for(var i = 0 ; i < str.length ; i++){
//     a += str[i]
//     if(str[i] == ' '){
//         if(a > long_word){
//             long_word = a
//         }
//     }
// }
// console.log(long_word)



