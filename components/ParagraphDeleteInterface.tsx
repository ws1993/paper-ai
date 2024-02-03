import { faL } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Swal from "sweetalert2";

// 定义Props类型
interface SweetAlertComponentProps {
  index: number;
  removeReferenceUpdateIndex: (index: number, rmPg: boolean) => void;
}

const ParagraphDeleteButton: React.FC<SweetAlertComponentProps> = ({
  index,
  removeReferenceUpdateIndex,
}) => {
  const showAlert = async () => {
    const result = await Swal.fire({
      title: "需要同时删除与文献相关的整个段落吗?",
      text: "根据周围的换行符来判断是否是同一个段落",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      removeReferenceUpdateIndex(index, true);
      // Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } else {
      removeReferenceUpdateIndex(index, false);
      // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
    }
  };

  return (
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      onClick={showAlert} // 直接使用showAlert而不传递参数
    >
      X
    </button>
  );
};

export default ParagraphDeleteButton;