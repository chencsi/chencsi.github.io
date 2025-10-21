const HomeSkills = () => {
  return (
    <div className="min-h-20 space-y-10 py-10">
      <h3 className="text-center text-4xl font-black">My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 px-30 md:px-20 gap-10 max-w-[1000px] mx-auto">
        <div className="space-y-5">
          <h4 className="font-black uppercase text-center text-2xl">Coding Skills</h4>
          <div className="min-h-30 rounded-xl border border-zinc-500/50 p-5">
            <div className="space-y-3">
              <div>
                <p>HTML & CSS | TailwindCSS</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <p>JavaScript | Typescript</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <p>React & Vite | NextJS</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <p>React native & Expo</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <p>Anuglar & PrimeNG</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <p>PHP & Laravel</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h4 className="font-black uppercase text-center text-2xl">Professional Skills</h4>
          <div className="min-h-30 rounded-xl border border-zinc-500/50 p-5">
            <div className="space-y-3">
              <div>
                <p>Frontend Development</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <p>Web Designing</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '67%' }}></div>
                </div>
              </div>
              <div>
                <p>Fullstack Development</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <p>Docker Containerization</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <p>pnux Knowledge</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <p>SEO Optimization</p>
                <div className="w-full bg-zinc-300/30 h-3 mt-1 rounded-sm">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 h-3 rounded-sm" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSkills;