import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.833 76.5833H82.1667C79.6458 76.5833 77.5833 78.6458 77.5833 81.1667V117.833C77.5833 120.354 79.6458 122.417 82.1667 122.417H118.833C121.354 122.417 123.417 120.354 123.417 117.833V81.1667C123.417 78.6458 121.354 76.5833 118.833 76.5833ZM118.833 117.833H82.1667V81.1667H118.833V117.833ZM114.25 85.75H102.792C100.271 85.75 98.2083 87.8125 98.2083 90.3333V95.5583C96.8333 96.3604 95.9167 97.8042 95.9167 99.5C95.9167 102.021 97.9792 104.083 100.5 104.083C103.021 104.083 105.083 102.021 105.083 99.5C105.083 97.8042 104.167 96.3375 102.792 95.5583V90.3333H109.667V108.667H91.3333V90.3333H95.9167V85.75H86.75V113.25H114.25V85.75Z"
        fill="white"
      />
      <path
        className="wave1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M144.683 118.418C147.035 112.763 148.334 106.56 148.334 100.053C148.334 93.8547 147.155 87.9312 145.01 82.4948L141.623 85.8819C143.153 90.3241 143.983 95.0917 143.983 100.053C143.983 105.328 143.045 110.382 141.326 115.06L144.683 118.418ZM59.6307 115.06C57.9116 110.382 56.9731 105.328 56.9731 100.053C56.9731 95.0917 57.8037 90.3241 59.3335 85.8818L55.9465 82.4948C53.8012 87.9312 52.6226 93.8547 52.6226 100.053C52.6226 106.56 53.9211 112.763 56.273 118.418L59.6307 115.06Z"
        fill="white"
      />
      <path
        className="wave2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.3113 99.6184C41.3113 90.593 43.3471 82.0432 46.9845 74.403L50.2663 77.6848C47.3058 84.3937 45.6618 91.8141 45.6618 99.6184C45.6618 107.959 47.5396 115.861 50.8954 122.925L47.6447 126.176C43.5943 118.2 41.3113 109.176 41.3113 99.6184ZM152.146 126.75C156.381 118.635 158.775 109.406 158.775 99.6184C158.775 90.3613 156.633 81.6044 152.818 73.8162L149.551 77.0841C152.681 83.9498 154.424 91.5804 154.424 99.6184C154.424 108.191 152.441 116.3 148.908 123.512L152.146 126.75Z"
        fill="white"
      />
      <path
        className="wave3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 100.053C30 87.7491 33.1531 76.1813 38.6953 66.1138L41.9078 69.3263C37.0815 78.507 34.3505 88.9613 34.3505 100.053C34.3505 111.444 37.2305 122.162 42.302 131.519L39.101 134.72C33.3072 124.484 30 112.655 30 100.053ZM161.218 135.823C167.406 125.337 170.956 113.11 170.956 100.053C170.956 87.2928 167.565 75.3243 161.635 65L158.44 68.195C163.645 77.6443 166.606 88.503 166.606 100.053C166.606 111.901 163.49 123.021 158.034 132.638L161.218 135.823Z"
        fill="white"
      />
      <path
        d="M77.5879 150.48H79.2479V163H77.4279L74.7879 153.96V163H73.1279V150.48H75.0279L77.5879 159.26V150.48ZM86.791 151.94H83.151V156.06H86.031V157.48H83.151V163H81.331V150.48H86.791V151.94ZM93.7316 154.4H91.8916V152.48C91.8916 152.24 91.8516 152.087 91.7716 152.02C91.705 151.94 91.5516 151.9 91.3116 151.9H90.2916C90.0516 151.9 89.8916 151.94 89.8116 152.02C89.7316 152.087 89.6916 152.24 89.6916 152.48V161.02C89.6916 161.26 89.7316 161.42 89.8116 161.5C89.8916 161.567 90.0516 161.6 90.2916 161.6H91.3116C91.5516 161.6 91.705 161.567 91.7716 161.5C91.8516 161.42 91.8916 161.26 91.8916 161.02V159.12H93.7316V161.24C93.7316 162.427 93.105 163.02 91.8516 163.02H89.7316C88.4916 163.02 87.8716 162.427 87.8716 161.24V152.24C87.8716 151.067 88.4916 150.48 89.7316 150.48H91.8516C93.105 150.48 93.7316 151.067 93.7316 152.24V154.4ZM100.201 157.94V163H98.4013V150.48H102.501C103.741 150.48 104.361 151.067 104.361 152.24V156.16C104.361 157.173 103.915 157.753 103.021 157.9L105.001 163H103.061L101.181 157.94H100.201ZM100.201 151.94V156.5H101.961C102.201 156.5 102.361 156.467 102.441 156.4C102.521 156.32 102.561 156.16 102.561 155.92V152.52C102.561 152.28 102.521 152.127 102.441 152.06C102.361 151.98 102.201 151.94 101.961 151.94H100.201ZM107.991 153.24H109.951C111.204 153.24 111.831 153.833 111.831 155.02V158.68H107.891V161C107.891 161.227 107.931 161.38 108.011 161.46C108.091 161.54 108.251 161.58 108.491 161.58H109.411C109.651 161.58 109.811 161.54 109.891 161.46C109.971 161.38 110.011 161.22 110.011 160.98V160.18H111.771V161.24C111.771 162.413 111.151 163 109.911 163H107.991C106.751 163 106.131 162.413 106.131 161.24V155.02C106.131 153.833 106.751 153.24 107.991 153.24ZM107.891 157.36H110.051V155.24C110.051 155.013 110.011 154.86 109.931 154.78C109.864 154.7 109.711 154.66 109.471 154.66H108.491C108.251 154.66 108.091 154.7 108.011 154.78C107.931 154.86 107.891 155.013 107.891 155.24V157.36ZM117.018 153.24H118.818V163H117.018V162.22C116.845 162.74 116.431 163 115.778 163H115.058C113.858 163 113.258 162.413 113.258 161.24V155.02C113.258 153.833 113.858 153.24 115.058 153.24H115.778C116.431 153.24 116.845 153.5 117.018 154.02V153.24ZM115.658 161.54H116.358C116.598 161.54 116.765 161.487 116.858 161.38C116.965 161.273 117.018 161.093 117.018 160.84V155.4C117.018 155.147 116.965 154.967 116.858 154.86C116.765 154.753 116.598 154.7 116.358 154.7H115.658C115.418 154.7 115.258 154.74 115.178 154.82C115.098 154.887 115.058 155.04 115.058 155.28V160.96C115.058 161.2 115.098 161.36 115.178 161.44C115.258 161.507 115.418 161.54 115.658 161.54ZM124.225 149.62H126.025V163H124.225V162.22C124.052 162.74 123.638 163 122.985 163H122.265C121.065 163 120.465 162.413 120.465 161.24V155C120.465 153.813 121.065 153.22 122.265 153.22H122.985C123.638 153.22 124.052 153.48 124.225 154V149.62ZM122.865 161.54H123.565C123.805 161.54 123.972 161.487 124.065 161.38C124.172 161.273 124.225 161.093 124.225 160.84V155.38C124.225 155.127 124.172 154.947 124.065 154.84C123.972 154.733 123.805 154.68 123.565 154.68H122.865C122.625 154.68 122.465 154.72 122.385 154.8C122.305 154.88 122.265 155.033 122.265 155.26V160.96C122.265 161.2 122.305 161.36 122.385 161.44C122.465 161.507 122.625 161.54 122.865 161.54Z"
        fill="white"
      />
    </svg>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  position: absolute;
  width: 100%;
  height: 100%;
  .wave1,
  .wave2,
  .wave3 {
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .wave1 {
    animation-name: waveAnim1;
  }
  .wave2 {
    animation-name: waveAnim2;
  }
  .wave3 {
    animation-name: waveAnim3;
  }
`
// ______________________________________________________
//
export default StyledComponent
