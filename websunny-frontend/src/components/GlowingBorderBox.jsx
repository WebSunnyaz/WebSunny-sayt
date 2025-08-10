import React from "react";
import "./GlowingBorderBox.css";

const GlowingBorderBox = ({ title, description, icon }) => {
  return (
    <div className="relative p-[2px] rounded-xl overflow-hidden group">
      {/* Border glow layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 
                      animate-glow border-animation z-0"></div>

      {/* İç məzmun */}
      <div className="relative z-10 bg-black text-white rounded-xl p-6 text-left shadow-[0_4px_12px_rgba(255,255,255,0.3)]">
        <div className="flex flex-col max-sm:flex-row max-sm:gap-10 items-start gap-4">
          {/* Neon icon */}
          <div className="text-4xl shrink-0 p-4 rounded-xl bg-[#0a1335] text-[#28b6ff] shadow-[0_0_6px_#28b6ff,0_0_12px_#28b6ff66]">
            {icon}
          </div>

          {/* Başlıq və açıqlama */}
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingBorderBox;

