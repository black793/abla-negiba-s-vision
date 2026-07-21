import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import teacher4 from "@/assets/teacher-4.jpg";
import teacher5 from "@/assets/teacher-5.jpg";
import courseMath from "@/assets/course-math.jpg";
import courseChem from "@/assets/course-chem.jpg";
import coursePhysics from "@/assets/course-physics.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";

export type Stage = "ابتدائي" | "إعدادي" | "ثانوي";

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
  stages: Stage[];
  rating: number;
  studentsCount: number;
  yearsExperience: number;
  bio: string;
  approach: string[];
  qualifications: { year: string; title: string; place: string }[];
  schedule: { day: string; time: string; topic: string }[];
}

export interface Course {
  id: string;
  title: string;
  subject: string;
  teacherId: string;
  stage: Stage;
  grade: string;
  lessons: number;
  rating: number;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  content: { title: string; duration: string; free?: boolean }[];
}

export interface Testimonial {
  id: string;
  name: string;
  grade: string;
  quote: string;
  image: string;
}

export const teachers: Teacher[] = [
  {
    id: "mr-karim-math",
    name: "أ. كريم عبدالله",
    subject: "رياضيات",
    image: teacher1,
    stages: ["ثانوي", "إعدادي"],
    rating: 4.9,
    studentsCount: 1240,
    yearsExperience: 12,
    bio: "رياضيات لثانوي عام – حل مسائل ومراجعات نهائية.",
    approach: [
      "شرح مبسّط بالخطوة من الحياة",
      "تطبيقات على مسائل من كل نوع سؤال",
      "ملخصات دورية وخلاصة بعد كل درس",
      "اختبارات دورية وتغذية راجعة مستمرة",
      "متابعة فردية على أداء كل طالب",
    ],
    qualifications: [
      { year: "2016", title: "معيد ماجستير", place: "بجامعة عين شمس – قسم الرياضيات" },
      { year: "2019", title: "الآن — مدرس تجويد", place: "في تدريس أكاديميات كثيرة" },
      { year: "2015", title: "دبلوم تربوي", place: "جامعة القاهرة" },
      { year: "2012", title: "بكالوريوس العلوم افتراضياً", place: "جامعة القاهرة" },
    ],
    schedule: [
      { day: "السبت", time: "8:00 م - 9:30 م", topic: "التفاضل والتكامل — تطبيقات" },
      { day: "الاثنين", time: "8:00 م - 9:30 م", topic: "المشتقات العليا والتطبيقات الهندسية" },
      { day: "الأربعاء", time: "8:00 م - 9:30 م", topic: "التكامل بطرقه المختلفة" },
      { day: "الجمعة", time: "8:00 م - 9:30 م", topic: "الحل والمناقشة" },
    ],
  },
  {
    id: "ms-sara-arabic",
    name: "أ. سارة الشامي",
    subject: "لغة عربية",
    image: teacher4,
    stages: ["إعدادي", "ثانوي"],
    rating: 4.8,
    studentsCount: 980,
    yearsExperience: 9,
    bio: "لغة عربية بأسلوب حديث وسهل الاستيعاب.",
    approach: [
      "شرح النحو والصرف بطريقة سلسة",
      "تحليل النصوص الأدبية بعمق",
      "تدريبات على القراءة والفهم",
      "مراجعات مركزة قبل الامتحان",
    ],
    qualifications: [
      { year: "2015", title: "ليسانس آداب لغة عربية", place: "جامعة القاهرة" },
      { year: "2018", title: "دبلوم في التربية", place: "جامعة عين شمس" },
    ],
    schedule: [
      { day: "الأحد", time: "7:00 م - 8:30 م", topic: "النحو" },
      { day: "الثلاثاء", time: "7:00 م - 8:30 م", topic: "الأدب" },
    ],
  },
  {
    id: "mr-mohamed-english",
    name: "أ. محمد الحسيني",
    subject: "لغة إنجليزية",
    image: teacher3,
    stages: ["ابتدائي", "إعدادي"],
    rating: 4.7,
    studentsCount: 750,
    yearsExperience: 7,
    bio: "تعليم اللغة الإنجليزية بأسلوب تفاعلي وسهل.",
    approach: [
      "التركيز على المحادثة والنطق الصحيح",
      "قواعد اللغة بشكل مبسّط",
      "أنشطة تفاعلية مع الطلاب",
    ],
    qualifications: [
      { year: "2017", title: "بكالوريوس آداب لغة إنجليزية", place: "جامعة الإسكندرية" },
    ],
    schedule: [
      { day: "الاثنين", time: "6:00 م - 7:00 م", topic: "قواعد" },
      { day: "الخميس", time: "6:00 م - 7:00 م", topic: "محادثة" },
    ],
  },
  {
    id: "mr-ahmed-science",
    name: "أ. أحمد فتحي",
    subject: "علوم",
    image: teacher3,
    stages: ["إعدادي"],
    rating: 4.8,
    studentsCount: 890,
    yearsExperience: 8,
    bio: "علوم عامة بشرح ميسّر ومنظّم.",
    approach: [
      "تجارب عملية مبسّطة",
      "ربط العلوم بالحياة اليومية",
      "أسئلة تفكير علمي بعد كل درس",
    ],
    qualifications: [{ year: "2016", title: "بكالوريوس علوم", place: "جامعة أسيوط" }],
    schedule: [{ day: "الأربعاء", time: "5:00 م - 6:30 م", topic: "الفصل الأول" }],
  },
  {
    id: "ms-mona-physics",
    name: "أ. منى زكي",
    subject: "فيزياء",
    image: teacher5,
    stages: ["ثانوي"],
    rating: 4.9,
    studentsCount: 1100,
    yearsExperience: 10,
    bio: "فيزياء ثانوي عام — شرح المفاهيم بعمق وتطبيق.",
    approach: [
      "فهم عميق للمفاهيم قبل الحل",
      "حل مسائل من مستويات مختلفة",
      "مراجعات نهائية شاملة",
    ],
    qualifications: [{ year: "2013", title: "ماجستير فيزياء", place: "جامعة الإسكندرية" }],
    schedule: [
      { day: "الأحد", time: "8:00 م - 9:30 م", topic: "الكهربية" },
      { day: "الثلاثاء", time: "8:00 م - 9:30 م", topic: "الحركة الموجية" },
    ],
  },
  {
    id: "mr-kareem-abdelazim",
    name: "أ. كريم عبد العظيم",
    subject: "رياضيات",
    image: teacher1,
    stages: ["إعدادي"],
    rating: 4.8,
    studentsCount: 640,
    yearsExperience: 6,
    bio: "رياضيات إعدادي بأسلوب مبسّط وتدريبات كثيرة.",
    approach: ["أساسيات قوية", "تدريبات متنوعة", "متابعة أسبوعية"],
    qualifications: [{ year: "2018", title: "بكالوريوس رياضيات", place: "جامعة المنصورة" }],
    schedule: [{ day: "السبت", time: "5:00 م - 6:30 م", topic: "الجبر" }],
  },
];

export const courses: Course[] = [
  {
    id: "math-3sec",
    title: "رياضيات 3 ثانوي — Calculus",
    subject: "رياضيات",
    teacherId: "mr-karim-math",
    stage: "ثانوي",
    grade: "3 ثانوي",
    lessons: 24,
    rating: 4.7,
    price: 480,
    image: courseMath,
    description: "تفاضل وتكامل — حل مسائل ونماذج امتحانات كاملة تحضيراً للثانوية العامة.",
    highlights: [
      "24 محاضرة مسجّلة عالية الجودة",
      "متابعة أسبوعية مع تقارير للأهل",
      "اختبارات دورية وتقييم مستمر",
      "مجموعة واتساب مع المدرس",
    ],
    outcomes: [
      "حل تمارين بأسئلة على كل درس بمشتقات بالعمقة",
      "تنظيم إجابتك بطريقة اكاديمية تنال العلامة",
      "مراجعات شاملة واختبارات على المستحلات",
      "مشتقات دائمة وخاطئة دائمة وأخيراً تكون شديدة",
    ],
    content: [
      { title: "المحاضرة 1 — النهايات", duration: "1:05:00", free: true },
      { title: "المحاضرة 2 — الاتصال", duration: "58:00" },
      { title: "المحاضرة 3 — المشتقات", duration: "1:10:00" },
      { title: "المحاضرة 4 — تطبيقات المشتقات", duration: "1:12:00" },
      { title: "المحاضرة 5 — التكامل", duration: "1:00:00" },
      { title: "المحاضرة 6 — تطبيقات التكامل", duration: "1:15:00" },
    ],
  },
  {
    id: "chem-3sec",
    title: "كيمياء 3 ثانوي",
    subject: "كيمياء",
    teacherId: "ms-sara-arabic",
    stage: "ثانوي",
    grade: "3 ثانوي",
    lessons: 20,
    rating: 4.7,
    price: 450,
    image: courseChem,
    description: "كيمياء عضوية وغير عضوية — شرح كامل مع تطبيقات على أسئلة الامتحان.",
    highlights: ["شرح مبسّط", "مسائل متنوعة", "ملخصات دورية"],
    outcomes: ["إتقان الروابط", "فهم التفاعلات", "حل مسائل الحسابات"],
    content: [
      { title: "الوحدة 1 — الأحماض والقواعد", duration: "55:00", free: true },
      { title: "الوحدة 2 — الكيمياء الكهربية", duration: "1:10:00" },
    ],
  },
  {
    id: "chem-2sec",
    title: "كيمياء 2 ثانوي",
    subject: "كيمياء",
    teacherId: "ms-sara-arabic",
    stage: "ثانوي",
    grade: "2 ثانوي",
    lessons: 18,
    rating: 4.8,
    price: 400,
    image: courseChem,
    description: "أساسيات الكيمياء للصف الثاني الثانوي.",
    highlights: ["أساسيات قوية", "تدريبات متعددة"],
    outcomes: ["بناء أساس قوي", "الاستعداد للثالثة الثانوية"],
    content: [{ title: "المحاضرة 1", duration: "50:00", free: true }],
  },
  {
    id: "math-3sec-b",
    title: "رياضيات 3 ثانوي — جبر وهندسة",
    subject: "رياضيات",
    teacherId: "mr-karim-math",
    stage: "ثانوي",
    grade: "3 ثانوي",
    lessons: 22,
    rating: 4.7,
    price: 460,
    image: courseMath,
    description: "الجبر والهندسة التحليلية بالكامل.",
    highlights: ["شرح مركّز", "مسائل شاملة"],
    outcomes: ["إتقان الجبر", "إتقان الهندسة التحليلية"],
    content: [{ title: "المحاضرة 1 — المصفوفات", duration: "1:00:00", free: true }],
  },
  {
    id: "math-3prep",
    title: "رياضيات 3 إعدادي",
    subject: "رياضيات",
    teacherId: "mr-kareem-abdelazim",
    stage: "إعدادي",
    grade: "3 إعدادي",
    lessons: 20,
    rating: 4.8,
    price: 320,
    image: courseMath,
    description: "منهج رياضيات 3 إعدادي بالكامل مع مراجعات.",
    highlights: ["شرح مبسّط", "تدريبات كثيرة", "امتحانات"],
    outcomes: ["إتقان المنهج", "الاستعداد للثانوية"],
    content: [{ title: "المحاضرة 1", duration: "45:00", free: true }],
  },
  {
    id: "physics-3sec",
    title: "فيزياء 3 ثانوي",
    subject: "فيزياء",
    teacherId: "ms-mona-physics",
    stage: "ثانوي",
    grade: "3 ثانوي",
    lessons: 26,
    rating: 4.9,
    price: 500,
    image: coursePhysics,
    description: "فيزياء ثانوي كاملة — شرح مفاهيمي وحل مسائل.",
    highlights: ["شرح متعمّق", "مسائل من كل نوع", "مراجعات نهائية"],
    outcomes: ["فهم عميق للمفاهيم", "إتقان حل المسائل"],
    content: [{ title: "المحاضرة 1 — الكهربية", duration: "1:10:00", free: true }],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "سلمى",
    grade: "الصف الثاني الثانوي",
    quote: "خطة المذاكرة والاختبارات ساعدتني أنظّم وقتي وأرفع درجاتي.",
    image: student2,
  },
  {
    id: "t2",
    name: "جنى",
    grade: "الصف الثالث الإعدادي",
    quote: "منصة متكاملة فعلاً.. فيها كل اللي احتاجه عشان أذاكر بتركيز.",
    image: student1,
  },
  {
    id: "t3",
    name: "علي",
    grade: "الصف الأول الثانوي",
    quote: "التقارير اللي بتوصل لأهلي على واتساب حاجة مريحة جداً.",
    image: student3,
  },
  {
    id: "t4",
    name: "يوسف",
    grade: "الصف الثالث الإعدادي",
    quote: "اخترت المدرسين صح والحصص المباشرة فرّقت معايا جداً.",
    image: student4,
  },
];

export const subjects = ["رياضيات", "فيزياء", "كيمياء", "علوم", "لغة عربية", "لغة إنجليزية"];
export const stages: Stage[] = ["ابتدائي", "إعدادي", "ثانوي"];

export function getTeacher(id: string) {
  return teachers.find((t) => t.id === id);
}
export function getCourse(id: string) {
  return courses.find((c) => c.id === id);
}
export function getCoursesByTeacher(teacherId: string) {
  return courses.filter((c) => c.teacherId === teacherId);
}