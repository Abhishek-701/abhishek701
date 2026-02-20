import { motion } from "framer-motion";
import { Users, MessageSquare, Lightbulb, Target, Clock, Handshake } from "lucide-react";

const softSkills = [
  { name: "Team Collaboration", icon: Users, description: "Thrive in cross-functional teams, bridging gaps between engineering, design, and product." },
  { name: "Communication", icon: MessageSquare, description: "Clear, concise communicator — comfortable presenting ideas to technical and non-technical audiences." },
  { name: "Problem Solving", icon: Lightbulb, description: "Analytical thinker who breaks complex problems into actionable steps and iterates quickly." },
  { name: "Goal-Oriented", icon: Target, description: "Focused on delivering measurable outcomes aligned with business and user needs." },
  { name: "Time Management", icon: Clock, description: "Effective at prioritizing tasks and meeting deadlines across concurrent projects." },
  { name: "Adaptability", icon: Handshake, description: "Quick to pick up new tools, frameworks, and domains — comfortable with ambiguity." },
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">04.</span>
          Soft Skills
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
