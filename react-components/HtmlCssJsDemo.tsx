import { useState } from "react";

// ─── Demo Components ─────────────────────────────────────────────────────────

function HtmlDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <input type="text" placeholder="이름" />
      <button>인사하기</button>
    </div>
  );
}

function CssDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <input
        type="text"
        placeholder="이름"
        style={{
          border: "2px solid #6366f1",
          borderRadius: "8px",
          padding: "8px 12px",
          fontSize: "14px",
          outline: "none",
          color: "#111",
          backgroundColor: "#fff",
          fontFamily: "inherit",
          boxSizing: "border-box",
          width: "100%",
        }}
      />
      <button
        style={{
          backgroundColor: "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "9px 16px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "not-allowed",
          fontFamily: "inherit",
          opacity: 0.75,
          width: "100%",
        }}
      >
        인사하기
      </button>
    </div>
  );
}

function JsDemo() {
  const [name, setName] = useState("");

  const handleClick = () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요!");
      return;
    }
    alert(`안녕하세요, ${name}님! 👋`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        style={{
          border: "2px solid #6366f1",
          borderRadius: "8px",
          padding: "8px 12px",
          fontSize: "14px",
          outline: "none",
          color: "#111",
          backgroundColor: "#fff",
          fontFamily: "inherit",
          boxSizing: "border-box",
          width: "100%",
          transition: "border-color 0.15s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#818cf8";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#6366f1";
        }}
      />
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "9px 16px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          fontFamily: "inherit",
          width: "100%",
          transition: "background-color 0.15s, transform 0.1s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#4f46e5";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#6366f1";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.97)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        인사하기
      </button>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

type CardProps = {
  badge: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  code: string;
  children: React.ReactNode;
};

function Card({
  badge,
  badgeColor,
  subtitle,
  description,
  code,
  children,
}: CardProps) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        border: `2px solid ${badgeColor}55`,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px 16px",
          backgroundColor: badgeColor,
          display: "flex",
          alignItems: "baseline",
          gap: "8px",
        }}
      >
        <span style={{ fontWeight: "800", fontSize: "15px", color: "white" }}>
          {badge}
        </span>
        <span
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.85)",
            fontWeight: "500",
          }}
        >
          = {subtitle}
        </span>
      </div>

      {/* Description */}
      <div
        style={{
          padding: "8px 14px 0",
          fontSize: "12px",
          color: "#94a3b8",
          lineHeight: "1.5",
        }}
      >
        {description}
      </div>

      {/* Code snippet */}
      <div style={{ padding: "8px 12px 0" }}>
        <pre
          style={{
            backgroundColor: "#1e1e2e",
            color: "#cdd6f4",
            padding: "10px 12px",
            borderRadius: "8px",
            fontSize: "11px",
            lineHeight: "1.7",
            margin: 0,
            fontFamily:
              '"Fira Code", "JetBrains Mono", "Courier New", monospace',
            whiteSpace: "pre",
            overflow: "auto",
          }}
        >
          {code}
        </pre>
      </div>

      {/* Demo area */}
      <div style={{ padding: "10px 12px 14px" }}>
        <div
          style={{
            fontSize: "10px",
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          실행 결과
        </div>
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderRadius: "8px",
            padding: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function HtmlCssJsDemo() {
  return (
    <div
      style={{
        display: "flex",
        gap: "14px",
        width: "100%",
        fontFamily:
          '"Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif',
      }}
    >
      <Card
        badge="HTML"
        badgeColor="#ea580c"
        subtitle="구조"
        description="화면에 요소를 배치합니다. 스타일도, 동작도 없습니다."
        code={`<input
  type="text"
  placeholder="이름"
/>
<button>
  인사하기
</button>`}
      >
        <HtmlDemo />
      </Card>

      <Card
        badge="CSS"
        badgeColor="#2563eb"
        subtitle="스타일"
        description="색상, 크기, 모양 등 시각적인 디자인을 입힙니다."
        code={`input {
  border: 2px solid #6366f1;
  border-radius: 8px;
  padding: 8px 12px;
}
button {
  background: #6366f1;
  color: white;
}`}
      >
        <CssDemo />
      </Card>

      <Card
        badge="JavaScript"
        badgeColor="#b45309"
        subtitle="동작"
        description="이름을 입력하고 버튼을 눌러보세요!"
        code={`button.addEventListener(
  'click', () => {
    const name = input.value;
    alert(
      \`안녕하세요, \${name}님!\`
    );
  }
);`}
      >
        <JsDemo />
      </Card>
    </div>
  );
}
