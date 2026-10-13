// Edit this file to update project text. Array order controls project order.
window.PORTFOLIO = {
  "name": "Haoran Lu",
  "tagline": "Controls, robotics & mechatronics",
  "intro": "I model and control physical systems, connecting dynamics and simulation with embedded hardware. My projects span reaction-wheel balancing, multi-axis fabrication, soft robotics, and a 3D-printed robot arm.",
  "email": "hrlu24@gmail.com",
  "linkedin": "https://www.linkedin.com/in/haoran-lu",
  "github": "",
  "resume": "",
  "education": [
    {
      "school": "Carnegie Mellon University",
      "degree": "M.S. in AI Engineering – Mechanical Engineering",
      "date": "Expected December 2027"
    },
    {
      "school": "University of Washington",
      "degree": "B.S. Mechanical Engineering · Mechatronics Pathway",
      "date": "June 2026"
    }
  ],
  "skills": [
    {
      "title": "Modeling & control",
      "items": "System dynamics, PID, LQR, state estimation, MATLAB / Simulink"
    },
    {
      "title": "Software & embedded systems",
      "items": "C/C++, Python, C#, embedded sensing, motor-control integration"
    },
    {
      "title": "Mechanical engineering",
      "items": "SolidWorks, Ansys, Rhino / Grasshopper, sensor and mechanical integration"
    }
  ],
  "projects": [
    {
      "id": "cubli",
      "title": "Reaction-wheel balancing cube",
      "category": "Controls & mechatronics",
      "organization": "UW Mechatronics Capstone",
      "date": "December 2025 – June 2026",
      "summary": "Modeling, simulation, and LQR control for a cube that balances on a corner using three reaction wheels.",
      "role": "Led control-system modeling, simulation, and LQR design for the 180 mm prototype.",
      "tags": [
        "Nonlinear dynamics",
        "LQR",
        "MATLAB / Simulink"
      ],
      "details": [
        "Derived Lagrangian equations and validated the nonlinear Simulink plant.",
        "Linearized about the balancing equilibrium and used controllability decomposition to design the LQR controller.",
        "Modeled sampling, IMU noise, and communication delay to guide component selection.",
        "Compared physical behavior with the model. Outer PI correction reduced wheel-speed drift by adjusting the balance reference.",
        "Demonstrated 30 minutes of continuous LQR balancing in the reported physical test."
      ],
      "result": "The capstone team received the Best Design Process award.",
      "links": []
    },
    {
      "id": "printer",
      "title": "Five-axis printer kinematics",
      "category": "Robotics & fabrication",
      "organization": "UW Integrated Fabrication Lab",
      "date": "January 2025 – June 2026",
      "summary": "A kinematics and G-code workflow that maps tool-tip positions and surface normals to machine commands.",
      "role": "Derived forward and inverse kinematics and implemented a C# Grasshopper solver with virtual motion verification.",
      "tags": [
        "Inverse kinematics",
        "C#",
        "Rhino / Grasshopper"
      ],
      "details": [
        "Mapped tool-tip position and surface normal to X, Y, Z, A, and C axis commands.",
        "Used continuity-aware branch selection to reduce abrupt rotary-axis reversals.",
        "Generated absolute G-code, parsed commands, animated machine axes, and reconstructed the nozzle path in Rhino.",
        "Implemented five fixed-axis modes and corrective rotary updates to respect the four-axis limit."
      ],
      "result": "Validated virtual toolpaths on planar, prismatic, and sinusoidal surfaces with tolerance-based orientation approximation.",
      "links": []
    },
    {
      "id": "biogem",
      "title": "BIOGEM soft actuator",
      "category": "Soft robotics research",
      "organization": "UIST 2025",
      "date": "2025",
      "summary": "A fully biodegradable gelatin-based McKibben actuator with embedded resistance-based strain sensing.",
      "role": "Co-first author on BIOGEM, combining biodegradable actuation and sensing.",
      "tags": [
        "Soft robotics",
        "Embedded sensing",
        "Research"
      ],
      "details": [
        "Gelatin tubing and a braid structure generate contraction under pneumatic pressure.",
        "A NaCl-doped gelatin sensor provides resistance-based feedback.",
        "The published team results demonstrate 14.8% contraction at 16 kPa with a 40.59° braid angle, and 8.0 N blocking force at 12 kPa with a 27.21° braid angle."
      ],
      "result": "Publication: BIOGEM: A Fully Biodegradable Gelatin-Based McKibben Actuator with Embedded Sensing. UIST 2025.",
      "links": []
    },
    {
      "id": "robot-arm",
      "title": "3D-printed robot arm",
      "category": "Robotics project",
      "organization": "Personal project",
      "date": "Summer 2023",
      "summary": "A physical robot arm built with 3D-printed components during summer 2023.",
      "role": "Built a physical robot arm as a hands-on robotics project.",
      "tags": [
        "3D printing",
        "Robot arm",
        "Hardware"
      ],
      "details": [
        "Built a robot arm with 3D-printed structural components.",
        "The prototype uses joint-mounted servos and a mechanical linkage, shown in the project photograph."
      ],
      "result": "Completed in summer 2023.",
      "links": []
    }
  ]
};
