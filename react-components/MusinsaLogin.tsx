import { useState } from "react";
import { EyeClosed, Eye } from "lucide-react";
import kakaoLogo from "../assets/kakao-logo.png";
import appleLogo from "../assets/apple-logo.png";

export default function MusinsaLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    const isEmailEmpty = email.trim() === "";
    const isPasswordEmpty = password.trim() === "";
    setEmailError(isEmailEmpty);
    setPasswordError(isPasswordEmpty);
    if (isEmailEmpty || isPasswordEmpty) return;
    alert("로그인 성공!");
  };

  return (
    <div
      style={{
        transform: "scale(0.5)",
        transformOrigin: "top center",
        width: "154%",
        marginLeft: "-27%",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: '"Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#f5f5f5",
            padding: "16px 24px",
            fontSize: "15px",
            fontWeight: "500",
            color: "#111",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          로그인/회원가입
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            marginTop: "8px",
            padding: "48px 40px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0",
          }}
        >
          {/* Brand logos */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontWeight: "900",
                fontSize: "20px",
                letterSpacing: "-0.5px",
                color: "#111",
              }}
            >
              MUSINSA
            </span>
            <span style={{ color: "#ccc", fontSize: "18px" }}>|</span>
            <span
              style={{
                fontWeight: "700",
                fontSize: "20px",
                letterSpacing: "1px",
                color: "#111",
              }}
            >
              29CM
            </span>
            <span style={{ color: "#ccc", fontSize: "18px" }}>|</span>
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#111",
                letterSpacing: "-0.5px",
              }}
            >
              soldout_
            </span>
          </div>

          <p
            style={{
              fontSize: "14px",
              color: "#555",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            무신사, 29CM, 솔드아웃을 하나로 로그인하세요.
          </p>

          {/* Email input */}
          <input
            type="text"
            placeholder="통합계정 또는 이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            style={{
              width: "100%",
              height: "48px",
              border: `1px solid ${emailError ? "#e53935" : "#ddd"}`,
              borderRadius: "4px",
              padding: "0 14px",
              fontSize: "14px",
              color: "#111",
              outline: "none",
              boxSizing: "border-box",
              marginBottom: emailError ? "4px" : "8px",
              backgroundColor: "#fff",
            }}
          />
          {emailError && (
            <p
              style={{
                width: "100%",
                fontSize: "12px",
                color: "#e53935",
                marginBottom: "8px",
              }}
            >
              통합계정 또는 이메일을 입력해 주세요.
            </p>
          )}

          {/* Password input */}
          <div
            style={{
              width: "100%",
              position: "relative",
              marginBottom: passwordError ? "4px" : "12px",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              style={{
                width: "100%",
                height: "48px",
                border: `1px solid ${passwordError ? "#e53935" : "#ddd"}`,
                borderRadius: "4px",
                padding: "0 44px 0 14px",
                fontSize: "14px",
                color: "#111",
                outline: "none",
                boxSizing: "border-box",
                backgroundColor: "#fff",
              }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
                color: "#aaa",
                fontSize: "18px",
                lineHeight: "1",
              }}
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>
          {passwordError && (
            <p
              style={{
                width: "100%",
                fontSize: "12px",
                color: "#e53935",
                marginBottom: "12px",
              }}
            >
              비밀번호를 입력해 주세요.
            </p>
          )}

          {/* Auto login checkbox */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <input
              type="checkbox"
              id="autoLogin"
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
              style={{
                width: "16px",
                height: "16px",
                cursor: "pointer",
                accentColor: "#111",
              }}
            />
            <label
              htmlFor="autoLogin"
              style={{ fontSize: "14px", color: "#333", cursor: "pointer" }}
            >
              자동 로그인
            </label>
          </div>

          {/* Login button */}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              marginBottom: "24px",
              fontFamily: "inherit",
            }}
          >
            로그인
          </button>

          {/* Coupon notice */}
          <p
            style={{
              fontSize: "13px",
              color: "#555",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            지금 가입하면, 신규 할인 쿠폰 즉시 발급
          </p>

          {/* Kakao button */}
          <button
            style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#FEE500",
              color: "#111",
              border: "none",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "inherit",
            }}
          >
            <img
              src={kakaoLogo}
              alt="Kakao"
              style={{ width: "20px", height: "20px" }}
            />
            카카오로 시작하기
          </button>

          {/* Apple button */}
          <button
            style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#fff",
              color: "#111",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "inherit",
            }}
          >
            <img
              src={appleLogo}
              alt="Apple"
              style={{ width: "18px", height: "18px" }}
            />
            Apple로 시작하기
          </button>

          {/* Email signup button */}
          <button
            style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#fff",
              color: "#111",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer",
              marginBottom: "24px",
              fontFamily: "inherit",
            }}
          >
            이메일로 가입하기
          </button>

          {/* Find ID / Password */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: "13px",
                color: "#888",
                cursor: "pointer",
                padding: "0",
                fontFamily: "inherit",
              }}
            >
              아이디 찾기
            </button>
            <span style={{ color: "#ddd", fontSize: "13px" }}>|</span>
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: "13px",
                color: "#888",
                cursor: "pointer",
                padding: "0",
                fontFamily: "inherit",
              }}
            >
              비밀번호 찾기
            </button>
          </div>

          {/* Non-member order */}
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "13px",
              color: "#555",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              padding: "0",
              fontFamily: "inherit",
            }}
          >
            비회원 주문 조회
          </button>
        </div>
      </div>
    </div>
  );
}
