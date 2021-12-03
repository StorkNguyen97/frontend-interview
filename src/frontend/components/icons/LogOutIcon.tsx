import type { SvgIconProps } from '@frontend/types/svg-icon'

export const LogOutIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.8306 4.46864V2.69941C12.8306 2.23018 12.6442 1.78017 12.3124 1.44837C11.9806 1.11658 11.5306 0.930176 11.0613 0.930176H2.56904C2.09981 0.930176 1.6498 1.11658 1.318 1.44837C0.986205 1.78017 0.799805 2.23018 0.799805 2.69941V13.3148C0.799805 13.784 0.986205 14.234 1.318 14.5658C1.6498 14.8976 2.09981 15.084 2.56904 15.084H11.0613C11.5306 15.084 11.9806 14.8976 12.3124 14.5658C12.6442 14.234 12.8306 13.784 12.8306 13.3148V11.5456M15.6613 4.46864L19.1998 8.0071M19.1998 8.0071L15.6613 11.5456M19.1998 8.0071H7.1248"
        stroke="#161616"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
