interface MainPageProps {
  participants: string[];
}

interface SettingPageProps {
  setParticipants: React.Dispatch<React.SetStateAction<string[]>>;
  participants: string[];
}

interface ConfirmPageProps {
  participants: string[];
}

interface WinnerPageProps {
  participants: string[];
  setParticipants: React.Dispatch<React.SetStateAction<string[]>>;
}

export type { MainPageProps, SettingPageProps, ConfirmPageProps, WinnerPageProps }