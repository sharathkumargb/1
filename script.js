const programs = [
{title:"Hello World",category:"BASICS",description:"Print your first message on the screen.",code:`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`},
{title:"Add Two Numbers",category:"BASICS",description:"Read two integers and display their sum.",code:`import java.util.Scanner;

public class AddTwoNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        int sum = a + b;
        System.out.println("Sum = " + sum);
        sc.close();
    }
}`},
{title:"Even or Odd",category:"CONDITIONS",description:"Use the remainder operator to check a number.",code:`import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        if (n % 2 == 0)
            System.out.println("Even number");
        else
            System.out.println("Odd number");

        sc.close();
    }
}`},
{title:"Largest of Three Numbers",category:"CONDITIONS",description:"Compare three numbers using if-else.",code:`import java.util.Scanner;

public class LargestOfThree {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter three numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if (a >= b && a >= c)
            System.out.println(a + " is largest");
        else if (b >= a && b >= c)
            System.out.println(b + " is largest");
        else
            System.out.println(c + " is largest");

        sc.close();
    }
}`},
{title:"Factorial of a Number",category:"LOOPS",description:"Calculate factorial using a for loop.",code:`import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        long fact = 1;

        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }

        System.out.println("Factorial = " + fact);
        sc.close();
    }
}`},
{title:"Multiplication Table",category:"LOOPS",description:"Print the multiplication table of a number.",code:`import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
        sc.close();
    }
}`},
{title:"Prime Number",category:"LOOPS",description:"Check whether a number is prime.",code:`import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        boolean prime = n > 1;

        for (int i = 2; i <= n / i; i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }

        System.out.println(prime ? "Prime" : "Not prime");
        sc.close();
    }
}`},
{title:"Fibonacci Series",category:"LOOPS",description:"Display the first n Fibonacci terms.",code:`import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many terms? ");
        int n = sc.nextInt();
        int a = 0, b = 1;

        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        sc.close();
    }
}`},
{title:"Reverse a Number",category:"NUMBER LOGIC",description:"Reverse the digits using remainder and division.",code:`import java.util.Scanner;

public class ReverseNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int reverse = 0;

        while (n != 0) {
            int digit = n % 10;
            reverse = reverse * 10 + digit;
            n = n / 10;
        }

        System.out.println("Reverse = " + reverse);
        sc.close();
    }
}`},
{title:"Palindrome Number",category:"NUMBER LOGIC",description:"Check whether a number reads the same backwards.",code:`import java.util.Scanner;

public class PalindromeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int original = n, reverse = 0;

        while (n > 0) {
            reverse = reverse * 10 + n % 10;
            n = n / 10;
        }

        if (original == reverse)
            System.out.println("Palindrome");
        else
            System.out.println("Not palindrome");

        sc.close();
    }
}`},
{title:"Sum of Digits",category:"NUMBER LOGIC",description:"Find the sum of all digits in an integer.",code:`import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = Math.abs(sc.nextInt());
        int sum = 0;

        while (n > 0) {
            sum = sum + n % 10;
            n = n / 10;
        }

        System.out.println("Sum of digits = " + sum);
        sc.close();
    }
}`},
{title:"Armstrong Number",category:"NUMBER LOGIC",description:"Check a three-digit Armstrong number.",code:`import java.util.Scanner;

public class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a three-digit number: ");
        int n = sc.nextInt();
        int temp = n, sum = 0;

        while (temp > 0) {
            int digit = temp % 10;
            sum = sum + digit * digit * digit;
            temp = temp / 10;
        }

        System.out.println(sum == n ? "Armstrong" : "Not Armstrong");
        sc.close();
    }
}`},
{title:"Swap Two Numbers",category:"BASICS",description:"Swap two values using a temporary variable.",code:`import java.util.Scanner;

public class SwapNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a and b: ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swap: a = " + a + ", b = " + b);
        sc.close();
    }
}`},
{title:"Array Sum and Average",category:"ARRAYS",description:"Read array elements and calculate sum and average.",code:`import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[5];
        int sum = 0;

        System.out.println("Enter 5 numbers:");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = sc.nextInt();
            sum += numbers[i];
        }

        double average = sum / 5.0;
        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);
        sc.close();
    }
}`},
{title:"Largest Element in Array",category:"ARRAYS",description:"Find the maximum value stored in an array.",code:`public class LargestInArray {
    public static void main(String[] args) {
        int[] a = {12, 45, 7, 89, 23};
        int largest = a[0];

        for (int i = 1; i < a.length; i++) {
            if (a[i] > largest) {
                largest = a[i];
            }
        }

        System.out.println("Largest = " + largest);
    }
}`},
{title:"Linear Search",category:"ARRAYS",description:"Search for a key by checking array elements one by one.",code:`public class LinearSearch {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40, 50};
        int key = 30;
        int position = -1;

        for (int i = 0; i < a.length; i++) {
            if (a[i] == key) {
                position = i;
                break;
            }
        }

        if (position == -1)
            System.out.println("Not found");
        else
            System.out.println("Found at index " + position);
    }
}`},
{title:"Bubble Sort",category:"ARRAYS",description:"Sort an integer array in ascending order.",code:`public class BubbleSort {
    public static void main(String[] args) {
        int[] a = {5, 2, 8, 1, 3};

        for (int i = 0; i < a.length - 1; i++) {
            for (int j = 0; j < a.length - 1 - i; j++) {
                if (a[j] > a[j + 1]) {
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }

        for (int value : a)
            System.out.print(value + " ");
    }
}`},
{title:"Matrix Addition",category:"2D ARRAYS",description:"Add two 2×2 matrices.",code:`public class MatrixAddition {
    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};
        int[][] b = {{5, 6}, {7, 8}};
        int[][] sum = new int[2][2];

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                sum[i][j] = a[i][j] + b[i][j];
                System.out.print(sum[i][j] + " ");
            }
            System.out.println();
        }
    }
}`},
{title:"Method Overloading",category:"METHODS & OOP",description:"Use the same method name with different parameters.",code:`public class MethodOverloading {
    static int add(int a, int b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(10, 20));
        System.out.println(add(10, 20, 30));
    }
}`},
{title:"Class and Object",category:"METHODS & OOP",description:"Create an object and call its method.",code:`class Student {
    String name = "Sharu";
    int semester = 3;

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Semester: " + semester);
    }
}

public class ClassAndObject {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();
    }
}`}
];

const menu = document.getElementById("programMenu");
const codeElement = document.getElementById("programCode");
let currentProgram = 0;
function showProgram(index) {
  currentProgram = index;
  const p = programs[index];
  document.getElementById("programCategory").textContent = p.category;
  document.getElementById("programNumber").textContent = `PROGRAM ${String(index+1).padStart(2,"0")}`;
  document.getElementById("programTitle").textContent = p.title;
  document.getElementById("programDescription").textContent = p.description;
  codeElement.textContent = p.code;
  document.querySelectorAll(".program-item").forEach((button,i)=>button.classList.toggle("active",i===index));
}
function renderMenu(filter="") {
  menu.innerHTML = "";
  programs.forEach((p,index)=>{
    if (!p.title.toLowerCase().includes(filter.toLowerCase()) && !p.category.toLowerCase().includes(filter.toLowerCase())) return;
    const button = document.createElement("button");
    button.className = "program-item" + (index===currentProgram?" active":"");
    const number = document.createElement("span");
    number.textContent = String(index+1).padStart(2,"0");
    button.append(number,document.createTextNode(p.title));
    button.addEventListener("click",()=>showProgram(index));
    menu.appendChild(button);
  });
}
renderMenu();
showProgram(0);
document.getElementById("programSearch").addEventListener("input",e=>renderMenu(e.target.value));
const toast = document.getElementById("toast");
function showToast(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800);}
document.getElementById("copyCode").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(programs[currentProgram].code);showToast("Java code copied!");}
  catch{showToast("Select the code and copy it manually.");}
});

const nav = document.getElementById("navigation");
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById("scrollProgress").style.width=(max>0?window.scrollY/max*100:0)+"%";
});
document.getElementById("year").textContent=new Date().getFullYear();

// Resume check: the visitor should place their own resume.pdf beside index.html.
fetch("resume.pdf",{method:"HEAD"}).then(response=>{
  if(response.ok) document.getElementById("resumeHint").textContent="Your resume PDF is ready to view or download.";
}).catch(()=>{});

// Brain Booster: a four-tile sequence memory game.
const tiles=[...document.querySelectorAll(".tile")];
const startButton=document.getElementById("startGame");
const message=document.getElementById("gameMessage");
let sequence=[],playerStep=0,level=0,best=Number(localStorage.getItem("sharuBrainBest")||0),playing=false,accepting=false;
document.getElementById("bestLevel").textContent=best;
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function flashTile(index){
  tiles[index].classList.add("lit");
  await sleep(420);
  tiles[index].classList.remove("lit");
  await sleep(170);
}
async function playSequence(){
  accepting=false;
  message.textContent="Watch the pattern carefully...";
  for(const item of sequence){await flashTile(item);}
  playerStep=0;
  accepting=true;
  message.textContent="Your turn! Repeat the pattern.";
}
function endGame(won){
  playing=false;accepting=false;
  tiles.forEach(tile=>tile.disabled=true);
  if(won){
    message.textContent=`Amazing! You completed level ${level}.`;
  }else{
    message.textContent=`Good try! You reached level ${level}. Press Start to try again.`;
  }
  startButton.disabled=false;
  startButton.textContent="Play again ↗";
}
startButton.addEventListener("click",async()=>{
  sequence=[];level=0;playerStep=0;playing=true;accepting=false;
  tiles.forEach(tile=>tile.disabled=false);
  document.getElementById("level").textContent="0";
  startButton.disabled=true;startButton.textContent="Game running...";
  message.textContent="Get ready...";
  await sleep(600);
  nextRound();
});
async function nextRound(){
  level++;document.getElementById("level").textContent=level;
  if(level>best){best=level;localStorage.setItem("sharuBrainBest",String(best));document.getElementById("bestLevel").textContent=best;}
  sequence.push(Math.floor(Math.random()*4));
  await sleep(350);
  await playSequence();
}
tiles.forEach((tile,index)=>{
  tile.disabled=true;
  tile.addEventListener("click",async()=>{
    if(!playing||!accepting)return;
    accepting=false;
    await flashTile(index);
    if(index!==sequence[playerStep]){endGame(false);return;}
    playerStep++;
    if(playerStep===sequence.length){
      message.textContent="Correct! Next level...";
      if(level>=15){endGame(true);return;}
      await sleep(650);nextRound();
    }else{accepting=true;}
  });
});