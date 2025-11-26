export interface TeamCardProps {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export const TeamCard = ({ id, name, role, imageUrl }: TeamCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{role}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
};
