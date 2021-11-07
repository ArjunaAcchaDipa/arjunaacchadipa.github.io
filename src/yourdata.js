// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.png"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Arjuna",
  headerTagline: [
    //Line 1 For Header
    "Cyber Security",
    //Line 2 For Header
    "Undergraduate",
    //Line 3 For Header
    "Student",
  ],
  //   Header Paragraph
  headerParagraph:
    "Welcome to my site.",

  //Contact Email
  contactEmail: "arjuna.dipa@binus.ac.id",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "LazyBroker", //Project Title - Add Your Project Title Here
      para:
        "LazyBroker is a trading bot application based on AI (Artificial Intelligence). LazyBroker was developed to help people who want to start learning to invest. I was mainly in charge of making the UI/UX", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/lazybroker.png'),
      //Project URL - Add Your Project Url Here
      url: "https://www.figma.com/file/QWEqmHh1XB4M2soaJ2xT17/LazyBroker?node-id=0%3A1",
    },
    {
      title: "Beans", //Project Title - Add Your Project Title Here
      para:
        "Beans is an information provider application that provides information about coffee shops in every city in Indonesia. I was mainly in charge of leading my team and developing the website.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/beans.png'),
      //Project URL - Add Your Project Url Here
      // url: "https://www.figma.com/proto/t3mm1moZ6iKUQ2QwpJ8Irc/Beans?node-id=12%3A48", 
      url: "https://github.com/ArjunaAcchaDipa/beans", 
    },
    {
      title: "Cryptography", //Project Title - Add Your Project Title Here
      para:
        "This repository can be used to learn how cryptography works (it was my main intention). So that we could understand how things work behind our back. It might be hard to learn about cryptography and I hope this repo will help you understand some of it.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/cryptography.png'),
      //Project URL - Add Your Project Url Here
      url: "https://github.com/ArjunaAcchaDipa/cryptography",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a Cyber Security Undergraduate Student at BINUS University. I took a big interest in Computer Science, especially in IT Security. I was born in Surabaya, and now currently pursuing my dream to become Cyber Security Engineer at BINUS University @Kemanggisan, Jakarta.",
  aboutParaTwo:
    "As Cyber Security Student, I am proficient in coding, testing, and debugging programs. Proficient in a variety of programming languages including C, Python, and SQL Server. Also familiar with Laravel, Git, Bash, and Assembly.",
  aboutImage:
    require('./images/profile.png'),

  //   End About Section ---------------------

  //   Promotion Section --------------------------

  promotionHeading: "Organizational Experience",

  // End Promotion Section -----------------

  //   Article Section --------------

  article: [
    {
      title: "Cara Membuat Password yang Aman!", //Project Title - Add Your Project Title Here
      para:
        "Password adalah kumpulan karakter yang digunakan oleh pengguna jaringan atau sistem yang umumnya mendukung banyak pengguna untuk memverifikasi identitas dirinya kepada sistem keamanan jaringan atau sistem.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articlePassword.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/03/cara-membuat-password-yang-aman/",
    },
    {
      title: "JSON Web Token", //Project Title - Add Your Project Title Here
      para:
        "JSON merupakan singkatan dari JavaScript Object Notation yang merupakan cara untuk menyimpan dan mengirim data. JSON biasanya digunakan untuk mengirimkan data dari server ke web page.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleJWT.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/05/json-web-token/", 
    },
    {
      title: "SQL Injection", //Project Title - Add Your Project Title Here
      para:
        "SQL merupakan singkatan dari Structured Query Language yang merupakan bahasa pemrograman untuk mengakses dan memanipulasi database.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleSQLi.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/06/sql-injection/",
    },
    {
      title: "Backdoor di PHP 8.1.0-Dev", //Project Title - Add Your Project Title Here
      para:
        "Backdoor merupakan pintu belakang yang memungkinkan penggunanya untuk masuk ke suatu jaringan, website, ataupun software tanpa perlu melakukan authentication.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleBackdoor.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/07/backdoor-di-php-8-1-0-dev/",
    },
    {
      title: "Wildcard Vulnerability", //Project Title - Add Your Project Title Here
      para:
        "Wildcard merupakan sebuah karakter yang menjadi placeholder atau tempat penampung yang biasanya terdiri dari satu karakter seperti *, ?, #, dan lainnya.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleWildcard.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/08/wildcard-vulnerability/",
    },
    {
      title: "Bypass 302 Found Response", //Project Title - Add Your Project Title Here
      para:
        "HTTP merupakan singkatan dari Hypertext Transfer Protocol, dimana HTTP adalah sebuah protokol pada application layer yang berguna untuk mentransfer informasi seperti dokumen, file, gambar, dan video antar komputer.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleBypass.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/09/bypass-302-found-response/",
    },
    {
      title: "Google Dork", //Project Title - Add Your Project Title Here
      para:
        "Google Dork merupakan suatu teknik yang memanfaatkan mesin pencarian Google untuk mendapatkan berbagai informasi penting atau sensitif yang tidak tersedia secara umum di dalam web.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleGoogle.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/09/google-dork/",
    },
    {
      title: "SSH Port Forwarding", //Project Title - Add Your Project Title Here
      para:
        "Secure Shell atau yang biasa disebut dengan SSH adalah sebuah protokol administrasi yang memungkinkan seseorang untuk mengakses server dengan aman karena SSH menggunakan enkripsi.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleSSH.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/10/ssh-port-forwarding/",
    },
    {
      title: "Malware", //Project Title - Add Your Project Title Here
      para:
        "Kata malware terdiri dari kata malicious yang berarti jahat dan software yang berarti perangkat lunak dan/atau data yang diprogram untuk melakukan suatu hal.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        require('./images/articleMalware.png'),
      //Project URL - Add Your Project Url Here
      url: "https://student-activity.binus.ac.id/csc/2021/10/malware/",
    },
  ],

  // End Article Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon, url: "https://github.com/ArjunaAcchaDipa"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/arjunaacchadipa",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/arjunaacchadipa",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
