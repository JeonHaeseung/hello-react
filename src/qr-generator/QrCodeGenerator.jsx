import { useState } from "react";
import './QrCodeGenerator.css';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { MdDonutLarge } from 'react-icons/md';

function QrCodeGenerator(props) {
    // [현재 QR 코드에 표시할 값, 상태 업데이트] = 초기값
    // 이름은 마음대로 해도 되지만, 자리에 따라서 역할이 정해짐
    const [qrCodeValue, setQrCodeValue] = useState('https://reactplay.io');
    const [loading, setLoading] = useState(false);

    // 이벤트 핸들러, QrCodeGenerator 컴포넌트의 상태를 업데이트
    // e는 이벤트 객체, e.target은 이벤트가 발생한 HTML 요소, e.target.value는 이벤트가 발생한 요소의 현재 값
    function handleChange(e) {
        setQrCodeValue(e.target.value);
    }

    function handleDownload() {
        // 다운로드 중
        setLoading(true);
        // htmlToImage 라이브러리의 toJpeg 함수는 HTML 요소를 JPEG 이미지로 변환
        // JPEG로 변환할 HTML 요소를 선택
        // JPEG 이미지의 품질을 설정(1은 최고 품질)
        htmlToImage
            .toJpeg(document.querySelector('#qrContain'), {
                quality: 1
            })
            // Promise가 성공적으로 완료되었을 때 실행되는 콜백 함수
            // 즉, htmlToImage.toJpeg가 성공적으로 JPEG 이미지를 생성할 경우
            .then((dataUrl) => {
                // 이미지 파일 다운로드
                // 다운로드 완료
                download(dataUrl, 'qrcode.jpeg');
                setLoading(false);
            })
            // Promise가 실패했을 때 실행되는 콜백 함수를 정의
            // 로딩 상태를 false로 설정
            .catch(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <div className="play-details">
                <div className="play-details-body">
                    {/* Your Code Starts Here */}
                    <div className="App">
                        <div id="qrContain" style={{ backgroundColor: 'white', width: 'fit-content' }}>
                            <QRCode
                                size={256}
                                value={
                                    qrCodeValue === undefined || qrCodeValue === ''
                                        ? 'https://reactplay.io'
                                        : qrCodeValue
                                }
                            />
                        </div>
                        <input
                            id="qrValue"
                            placeholder="Type something.."
                            type="text"
                            onChange={(e) => handleChange(e)}
                        />
                        <button id="download-btn" onClick={handleDownload}>
                            Download
                            {loading ? <MdDonutLarge /> : ''}
                        </button>
                    </div>
                    {/* Your Code Ends Here */}
                </div>
            </div>
        </>
    );
}

export default QrCodeGenerator;