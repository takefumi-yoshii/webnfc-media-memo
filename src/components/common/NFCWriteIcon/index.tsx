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
        d="M75.8184 150.48H77.4784V163H75.6584L73.0184 153.96V163H71.3584V150.48H73.2584L75.8184 159.26V150.48ZM85.0215 151.94H81.3815V156.06H84.2615V157.48H81.3815V163H79.5615V150.48H85.0215V151.94ZM91.9621 154.4H90.1221V152.48C90.1221 152.24 90.0821 152.087 90.0021 152.02C89.9354 151.94 89.7821 151.9 89.5421 151.9H88.5221C88.2821 151.9 88.1221 151.94 88.0421 152.02C87.9621 152.087 87.9221 152.24 87.9221 152.48V161.02C87.9221 161.26 87.9621 161.42 88.0421 161.5C88.1221 161.567 88.2821 161.6 88.5221 161.6H89.5421C89.7821 161.6 89.9354 161.567 90.0021 161.5C90.0821 161.42 90.1221 161.26 90.1221 161.02V159.12H91.9621V161.24C91.9621 162.427 91.3354 163.02 90.0821 163.02H87.9621C86.7221 163.02 86.1021 162.427 86.1021 161.24V152.24C86.1021 151.067 86.7221 150.48 87.9621 150.48H90.0821C91.3354 150.48 91.9621 151.067 91.9621 152.24V154.4ZM105.752 150.48H107.572L105.572 163H103.072L101.672 153.6L100.292 163H97.7918L95.7918 150.48H97.6518L99.0518 161.36L100.672 150.48H102.672L104.292 161.36L105.752 150.48ZM112.039 153.22H112.439V154.78H111.719C110.879 154.78 110.459 155.273 110.459 156.26V163H108.659V153.24H110.459V154.44C110.566 154.093 110.753 153.807 111.019 153.58C111.299 153.34 111.639 153.22 112.039 153.22ZM113.385 151.38V149.6H115.265V151.38H113.385ZM115.225 163H113.425V153.24H115.225V163ZM120.28 154.7H118.94V160.88C118.94 161.12 118.973 161.28 119.04 161.36C119.12 161.427 119.28 161.46 119.52 161.46H120.28V163H119C117.746 163 117.12 162.413 117.12 161.24V154.7H116.2V153.24H117.12V151.58H118.94V153.24H120.28V154.7ZM123.175 153.24H125.135C126.388 153.24 127.015 153.833 127.015 155.02V158.68H123.075V161C123.075 161.227 123.115 161.38 123.195 161.46C123.275 161.54 123.435 161.58 123.675 161.58H124.595C124.835 161.58 124.995 161.54 125.075 161.46C125.155 161.38 125.195 161.22 125.195 160.98V160.18H126.955V161.24C126.955 162.413 126.335 163 125.095 163H123.175C121.935 163 121.315 162.413 121.315 161.24V155.02C121.315 153.833 121.935 153.24 123.175 153.24ZM123.075 157.36H125.235V155.24C125.235 155.013 125.195 154.86 125.115 154.78C125.048 154.7 124.895 154.66 124.655 154.66H123.675C123.435 154.66 123.275 154.7 123.195 154.78C123.115 154.86 123.075 155.013 123.075 155.24V157.36Z"
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
    animation-name: waveAnim3;
  }
  .wave2 {
    animation-name: waveAnim2;
  }
  .wave3 {
    animation-name: waveAnim1;
  }
`
// ______________________________________________________
//
export default StyledComponent