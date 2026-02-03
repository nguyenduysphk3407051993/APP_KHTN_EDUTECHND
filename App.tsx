import React, { useState, useEffect } from 'react';
import { CURRICULUM_DATA } from './constants';
import { GradeData, Lesson, ViewState } from './types';
import { ChatWidget } from './components/ChatWidget';
import { ExerciseSection } from './components/ExerciseSection';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedGradeId, setSelectedGradeId] = useState<number | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const selectedGrade = CURRICULUM_DATA.find(g => g.id === selectedGradeId);

  // Trigger MathJax when content changes
  useEffect(() => {
    if (currentView === 'LESSON' && selectedLesson) {
      if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
        (window as any).MathJax.typesetPromise();
      }
    }
  }, [currentView, selectedLesson]);

  const handleGradeSelect = (id: number) => {
    setSelectedGradeId(id);
    setCurrentView('GRADE');
    window.scrollTo(0, 0);
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('LESSON');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setCurrentView('HOME');
    setSelectedGradeId(null);
    setSelectedLesson(null);
  };

  const goBackToGrade = () => {
    setCurrentView('GRADE');
    setSelectedLesson(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center cursor-pointer" onClick={goHome}>
              <span className="text-2xl mr-2">🧬</span>
              <span className="font-bold text-xl tracking-tight text-slate-900">KHTN <span className="text-blue-600">Master</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {CURRICULUM_DATA.map(g => (
                <button
                  key={g.id}
                  onClick={() => handleGradeSelect(g.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${selectedGradeId === g.id ? 'text-blue-600 bg-blue-50' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Lớp {g.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        {/* HOME VIEW */}
        {currentView === 'HOME' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Khám phá thế giới <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Khoa Học Tự Nhiên</span>
              </h1>
              <p className="text-lg text-slate-600">
                Chương trình học chuẩn cho học sinh lớp 6, 7, 8, 9 với sự hỗ trợ từ trí tuệ nhân tạo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CURRICULUM_DATA.map((grade) => (
                <div
                  key={grade.id}
                  onClick={() => handleGradeSelect(grade.id)}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 ${grade.color} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform`}></div>
                  <div className={`w-12 h-12 rounded-xl ${grade.color} text-white flex items-center justify-center text-2xl mb-4 shadow-md`}>
                    {grade.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-slate-800">Lớp {grade.id}</h2>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{grade.description}</p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Bắt đầu học
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  📚
                </div>
                <h3 className="font-bold text-slate-900">Kiến thức chuẩn</h3>
                <p className="text-sm text-slate-500">Bám sát chương trình sách giáo khoa mới.</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  🤖
                </div>
                <h3 className="font-bold text-slate-900">Trợ lý AI 24/7</h3>
                <p className="text-sm text-slate-500">Giải đáp thắc mắc ngay lập tức với Gemini.</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  ✨
                </div>
                <h3 className="font-bold text-slate-900">Giao diện hiện đại</h3>
                <p className="text-sm text-slate-500">Trực quan, dễ sử dụng trên mọi thiết bị.</p>
              </div>
            </div>
          </div>
        )}

        {/* GRADE VIEW */}
        {currentView === 'GRADE' && selectedGrade && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <span onClick={goHome} className="cursor-pointer hover:text-blue-600">Trang chủ</span>
              <span>/</span>
              <span className="font-medium text-slate-900">Lớp {selectedGrade.id}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className={`w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24`}>
                <div className={`inline-flex p-3 rounded-xl ${selectedGrade.color} text-white mb-4`}>
                  <span className="text-3xl">{selectedGrade.icon}</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Chương trình Lớp {selectedGrade.id}</h1>
                <p className="text-slate-600">{selectedGrade.description}</p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Thống kê</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">Số chương</span>
                    <span className="font-bold">{selectedGrade.chapters.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Tổng số bài học</span>
                    <span className="font-bold">{selectedGrade.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0)}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-6">
                {selectedGrade.chapters.map((chapter) => (
                  <div key={chapter.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800">{chapter.title}</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {chapter.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          onClick={() => handleLessonSelect(lesson)}
                          className="px-6 py-4 hover:bg-blue-50 cursor-pointer transition-colors flex justify-between items-center group"
                        >
                          <div>
                            <h4 className="font-medium text-slate-900 group-hover:text-blue-700">{lesson.title}</h4>
                            <p className="text-sm text-slate-500 mt-1">{lesson.description}</p>
                          </div>
                          <div className="text-slate-300 group-hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LESSON VIEW */}
        {currentView === 'LESSON' && selectedLesson && selectedGrade && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <span onClick={goHome} className="cursor-pointer hover:text-blue-600">Trang chủ</span>
              <span>/</span>
              <span onClick={goBackToGrade} className="cursor-pointer hover:text-blue-600">Lớp {selectedGrade.id}</span>
              <span>/</span>
              <span className="font-medium text-slate-900 truncate">{selectedLesson.title}</span>
            </div>

            <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative h-64 md:h-80 w-full bg-slate-200">
                <img
                  src={selectedLesson.imageUrl}
                  alt={selectedLesson.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <div className={`inline-block px-3 py-1 rounded-full ${selectedGrade.color} text-xs font-bold uppercase tracking-wider mb-2`}>
                      Lớp {selectedGrade.id}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold">{selectedLesson.title}</h1>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">{selectedLesson.description}</p>

                  {/* Theory Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4 pb-2 border-b border-slate-100">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                        📖
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 !m-0">Lý thuyết cần nhớ</h2>
                    </div>

                    <div
                      className="lesson-content text-slate-800"
                      dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
                    />
                  </div>

                  {/* Exercises Section */}
                  {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                    <ExerciseSection exercises={selectedLesson.exercises} />
                  )}

                  {/* Reflection Corner */}
                  <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                      💡
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1 !mt-0">Góc suy ngẫm</h3>
                      <p className="text-blue-800 text-sm !mb-0">
                        Bạn có thắc mắc về bài học này? Hãy bấm vào biểu tượng chat ở góc phải màn hình để hỏi thầy giáo AI ngay nhé!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-8 flex justify-between">
              <button
                onClick={goBackToGrade}
                className="flex items-center text-slate-600 hover:text-slate-900 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Quay lại danh sách
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2024 KHTN Master. Học tập vui vẻ và hiệu quả.</p>
        </div>
      </footer>

      {/* Global Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;