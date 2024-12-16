import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TIMINGS FOR THE WORKOUT SESSION</h1>
        <p>Mrng - 6:00 AM to 9:00AM</p>
        <p>Evng - 5:00 PM to 8:00 PM</p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our specialized bootcamps are designed to help you achieve your fitness goals. Choose the one that suits your needs best!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Weight Loss Bootcamp</h4>
            <p>
              A high-intensity program focused on burning calories, enhancing endurance, and achieving your weight loss goals.
            </p>
          </div>
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Build muscle and improve overall strength with expert-guided resistance training and weightlifting techniques.
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Bootcamp</h4>
            <p>
              Improve your flexibility, balance, and mindfulness with our yoga sessions designed for all skill levels.
            </p>
          </div>
          <div>
            <h4>HIIT (High-Intensity Interval Training) Bootcamp</h4>
            <p>
              Maximize your workout efficiency with short bursts of intense activity alternated with recovery periods.
            </p>
          </div>
          <div>
            <h4>Cardio Bootcamp</h4>
            <p>
              Boost your heart health and stamina with cardio-intensive workouts, including running, cycling, and aerobic exercises.
            </p>
          </div>
          <div>
            <h4>Core Strength Bootcamp</h4>
            <p>
              Focus on building a strong core through targeted exercises, improving posture, stability, and overall fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
