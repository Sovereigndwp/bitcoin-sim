import { course } from '@/data/course-data';

export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-5xl font-bold glow-orange">Learn Bitcoin by Doing</h1>
      <p className="text-lg text-accent-gray max-w-2xl mx-auto">
        An interactive learning platform for mastering Bitcoin concepts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {course.map((module) => (
          <a
            key={module.id}
            href={`/modules/${module.id}`}
            className="bg-card p-6 rounded-xl card-hover"
          >
            <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
            <p className="text-text-secondary">{module.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
