/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("exercises").del();
  await knex("exercises").insert([
    {
      name: "Push-ups",
      description:
        "Push-ups are a calisthenic exercise where you raise and lower your body by bending and straightening your arms while in a prone position, using your hands and toes for support. They primarily work the chest, shoulders, and triceps, but also engage the core and other supporting muscles.",
      calories_per_hour: 500,
      body_focus_id: 1,
      workout_type_id: 3,
      effort: 3,
    },
    {
      name: "Swimming",
      description:
        "Swimming can improve cardiovascular health, build muscle strength and flexibility, reduce stress and anxiety, improve sleep quality, and help with weight loss. It is a low-impact activity that is safe and effective for people of all ages and fitness levels, and can be enjoyed alone or with others.",
      calories_per_hour: 600,
      body_focus_id: 3,
      workout_type_id: 2,
      effort: 3,
    },
    {
      name: "Running",
      description:
        "Running provides numerous physical and mental health benefits, including improved cardiovascular health, enhanced mood, stress reduction, and even increased longevity. It also helps burn calories, builds muscle, and boosts the immune system. Running every day may increase your risk for an overuse injury. Overuse injuries result from taking on too much physical activity, too fast, and not allowing the body to adjust.",
      calories_per_hour: 700,
      body_focus_id: 2,
      workout_type_id: 2,
      effort: 4,
    },
    {
      name: "Pull-ups",
      description:
        "An exercise in which you grip an overhead bar with your palms facing away from you, hang freely, and then pull yourself up until your chin is over the bar. Pull-ups primarily work the latissimus dorsi (lats), the largest back muscle, and the biceps. ",
      calories_per_hour: 400,
      body_focus_id: 1,
      workout_type_id: 3,
      effort: 5,
    },
    {
      name: "Squats",
      description:
        "A compound, full-body exercise that trains primarily the muscles of the thighs, hips and buttocks (glutes), quadriceps, and hamstrings) and strengthens the bones, ligaments and tendons throughout the lower body.",
      calories_per_hour: 400,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 4,
    },
    {
      name: "Glute Bridge",
      description:
        "An exercise that primarily targets the gluteal muscles (gluteus maximus, medius, and minimus) as well as the hamstrings and core muscles. It involves lying on your back with bent knees and lifting your hips off the ground.",
      calories_per_hour: 300,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 2,
    },
    {
      name: "Split Squats",
      description:
        "A unilateral (single-leg) exercise where one leg is forward and the other is back, and you lower your hips towards the ground. It targets the quadriceps, glutes, and hamstrings of the front leg and also engages the stabilizing muscles.",
      calories_per_hour: 450,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 4,
    },
    {
      name: "Walking Lunges",
      description:
        "A dynamic, compound exercise that involves stepping forward with one leg and lowering your hips until both knees are bent at approximately 90-degree angles. It works the quadriceps, glutes, hamstrings, and calves, and also improves balance and coordination.",
      calories_per_hour: 400,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 3,
    },
    {
      name: "Single Leg Deadlift",
      description:
        "A unilateral exercise that involves hinging at the hips on one leg while extending the other leg straight back for balance. It primarily targets the hamstrings, glutes, and lower back of the standing leg and also improves balance and core stability.",
      calories_per_hour: 350,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 4,
    },
    {
      name: "Goblet Squat",
      description:
        "A squat variation performed while holding a dumbbell or kettlebell vertically against your chest. The added weight in front can help improve squat depth and primarily targets the quadriceps, glutes, and core.",
      calories_per_hour: 420,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 4,
    },
    {
      name: "Front Squat",
      description:
        "A squat variation where the barbell is held across the front of the shoulders. This placement emphasizes the quadriceps and upper back muscles more than a traditional back squat.",
      calories_per_hour: 450,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 5,
    },
    {
      name: "Calf Raises",
      description:
        "An isolation exercise that targets the muscles in the back of the lower leg, primarily the gastrocnemius and soleus. It involves raising your heels off the ground while keeping your knees straight or slightly bent.",
      calories_per_hour: 250,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 2,
    },
    {
      name: "Kettlebell Swing",
      description:
        "A dynamic, full-body exercise that involves swinging a kettlebell between your legs and up to chest height or overhead. It primarily works the posterior chain (glutes, hamstrings, lower back) and also engages the core and shoulders.",
      calories_per_hour: 600,
      body_focus_id: 2,
      workout_type_id: 4,
      effort: 4,
    },
    {
      name: "Side Lunge",
      description:
        "A lateral lunge variation that involves stepping sideways and bending one knee while keeping the other leg straight. It targets the inner and outer thighs (adductors and abductors), glutes, and quadriceps.",
      calories_per_hour: 380,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 3,
    },
    {
      name: "Leg Curl",
      description:
        "An isolation exercise typically performed on a machine that targets the hamstrings by bending your knees against resistance.",
      calories_per_hour: 280,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 3,
    },
    {
      name: "Leg Extension",
      description:
        "An isolation exercise typically performed on a machine that targets the quadriceps by extending your lower legs against resistance.",
      calories_per_hour: 280,
      body_focus_id: 2,
      workout_type_id: 3,
      effort: 3,
    },
  ]);
};
