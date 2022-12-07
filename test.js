const v1 = 7;
const v2 = 1;
const v3 = 3;

if (v1 > v2 && v2 > v3) {
  console.log("ex.7:", "v1>v2>v3");
} else if (v1 > v3 && v3 > v2) {
  console.log("ex.7:", "v1>v3>v2");
} else if (v2 > v1 && v1 > v3) {
  console.log("ex.7:", "v2>v1>v3");
} else if (v2 > v3 && v3 > v1) {
  console.log("ex.7:", "v2>v3>v1");
} else if (v3 > v1 && v1 > v2) {
  console.log("ex.7:", "v3>v1>v2");
} else if (v3 > v2 && v2 > v1) {
  console.log("ex.7:", "v3>v2>v1");
}

if (v1 !=== v2 && v2 !== v3 && v1 !== v3) {
    console.log("YESSSSSS")
}