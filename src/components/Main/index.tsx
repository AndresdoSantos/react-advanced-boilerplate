import * as S from './styles';

export function Main({
  title = 'React Avançado',
  description = ', ReactJS, NextJS e StyledTypeScript Components',
}) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
