export default function FormButtons({ currentStep, onPrevious, onSaveDraft, onNext }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mt-8 pt-6 border-t border-gray-200 gap-3 sm:gap-4">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="order-1 sm:order-none px-6 py-2.5 text-gray-700 bg-[#EEEEEE] border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <button
        onClick={onSaveDraft}
        className="order-3 sm:order-none px-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
      >
        Save Draft
      </button>

      <button
        onClick={onNext}
        className="order-2 sm:order-none px-8 py-4 bg-[#535353] text-white rounded-lg hover:bg-gray-900 font-medium"
      >
        {currentStep === 3 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
}