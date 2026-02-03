import React, { useState } from 'react';
import { Exercise, ExerciseType, QuestionOption } from '../types';

interface ExerciseSectionProps {
    exercises: Exercise[];
}

const ExerciseItem: React.FC<{ exercise: Exercise; index: number }> = ({ exercise, index }) => {
    const [userAnswer, setUserAnswer] = useState<string | boolean | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleCheck = () => {
        setIsSubmitted(true);
        let isCorrect = false;

        switch (exercise.type) {
            case 'MULTIPLE_CHOICE':
                // For MC, correctAnswer isn't stored directly on the exercise usually in this simple model, 
                // but let's assume valid options have isCorrect=true
                const selectedOption = exercise.options?.find(opt => opt.id === userAnswer);
                isCorrect = !!selectedOption?.isCorrect;
                break;
            case 'TRUE_FALSE':
                isCorrect = userAnswer === exercise.correctAnswer;
                break;
            case 'SHORT_ANSWER':
                if (typeof exercise.correctAnswer === 'string' && typeof userAnswer === 'string') {
                    isCorrect = userAnswer.trim().toLowerCase() === exercise.correctAnswer.trim().toLowerCase();
                }
                break;
            case 'ESSAY':
                // Essays can't be auto-graded easily in this simple client-side app
                setFeedback("Bài làm của bạn đã được ghi nhận để giáo viên chấm.");
                return;
        }

        if (isCorrect) {
            setFeedback("Chính xác! 🎉");
        } else {
            setFeedback("Chưa chính xác. Hãy thử lại hoặc xem giải thích nhé.");
        }
    };

    const renderContent = () => {
        switch (exercise.type) {
            case 'MULTIPLE_CHOICE':
                return (
                    <div className="space-y-2 mt-3">
                        {exercise.options?.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => !isSubmitted && setUserAnswer(option.id)}
                                className={`p-3 rounded-lg border cursor-pointer flex items-center transition-colors ${userAnswer === option.id
                                        ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500'
                                        : 'bg-white border-slate-200 hover:bg-slate-50'
                                    } ${isSubmitted && option.isCorrect ? 'bg-emerald-50 border-emerald-500 !ring-emerald-500' : ''}
                  ${isSubmitted && userAnswer === option.id && !option.isCorrect ? 'bg-red-50 border-red-500 !ring-red-500' : ''}
                `}
                            >
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${userAnswer === option.id ? 'border-blue-600' : 'border-slate-400'
                                    }`}>
                                    {userAnswer === option.id && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                                </div>
                                <span>{option.text}</span>
                            </div>
                        ))}
                    </div>
                );

            case 'TRUE_FALSE':
                return (
                    <div className="flex gap-4 mt-3">
                        <button
                            onClick={() => !isSubmitted && setUserAnswer(true)}
                            className={`px-6 py-2 rounded-lg border font-medium transition-colors ${userAnswer === true
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            Đúng
                        </button>
                        <button
                            onClick={() => !isSubmitted && setUserAnswer(false)}
                            className={`px-6 py-2 rounded-lg border font-medium transition-colors ${userAnswer === false
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            Sai
                        </button>
                    </div>
                );

            case 'SHORT_ANSWER':
                return (
                    <div className="mt-3">
                        <input
                            type="text"
                            placeholder="Nhập câu trả lời của bạn..."
                            disabled={isSubmitted}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
                        />
                    </div>
                );

            case 'ESSAY':
                return (
                    <div className="mt-3">
                        <textarea
                            rows={4}
                            placeholder="Viết câu trả lời tự luận của bạn..."
                            disabled={isSubmitted}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-slate-900 text-lg">Câu {index + 1} <span className="text-sm font-normal text-slate-500 ml-2 uppercase px-2 py-0.5 bg-slate-100 rounded text-xs tracking-wide">{getExerciseLabel(exercise.type)}</span></h4>
            </div>

            <div className="text-slate-800 mb-4 font-medium">
                {exercise.question}
            </div>

            {renderContent()}

            <div className="mt-6 flex items-center justify-between">
                {!isSubmitted ? (
                    <button
                        onClick={handleCheck}
                        disabled={userAnswer === null || (typeof userAnswer === 'string' && userAnswer.trim() === '')}
                        className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                    >
                        {exercise.type === 'ESSAY' ? 'Nộp bài' : 'Kiểm tra'}
                    </button>
                ) : (
                    <div className={`flex-1 p-3 rounded-lg ${feedback?.includes('Chính xác') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>
                        <div className="font-bold mb-1">{feedback}</div>
                        {exercise.explanation && <div className="text-sm mt-1 text-slate-600"><span className="font-semibold">Giải thích:</span> {exercise.explanation}</div>}
                        {exercise.type === 'SHORT_ANSWER' && !feedback?.includes('Chính xác') && (
                            <div className="text-sm mt-1"><span className="font-semibold">Đáp án đúng:</span> {exercise.correctAnswer as string}</div>
                        )}
                    </div>
                )}

                {isSubmitted && (
                    <button
                        onClick={() => { setIsSubmitted(false); setUserAnswer(null); setFeedback(null); }}
                        className="ml-4 text-slate-500 hover:text-blue-600 text-sm font-medium"
                    >
                        Làm lại
                    </button>
                )}
            </div>
        </div>
    );
};

const getExerciseLabel = (type: ExerciseType) => {
    switch (type) {
        case 'MULTIPLE_CHOICE': return 'Trắc nghiệm';
        case 'TRUE_FALSE': return 'Đúng / Sai';
        case 'SHORT_ANSWER': return 'Trả lời ngắn';
        case 'ESSAY': return 'Tự luận';
        default: return 'Bài tập';
    }
}

export const ExerciseSection: React.FC<ExerciseSectionProps> = ({ exercises }) => {
    if (!exercises || exercises.length === 0) return null;

    return (
        <div className="mt-12 animate-fade-in">
            <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    ✏️
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Luyện tập</h2>
            </div>

            <div className="space-y-2">
                {exercises.map((ex, idx) => (
                    <ExerciseItem key={ex.id} exercise={ex} index={idx} />
                ))}
            </div>
        </div>
    );
};
