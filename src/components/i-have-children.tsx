interface IHaveChildrenProps {
  children: React.ReactElement;
}

export const IHaveChildren = ({ children }: IHaveChildrenProps) => {
  return (
    <div>
      <h3>
        I have children
        &lt;&gt;??&#123;&#125;()[]~`!@#$%^&amp;*()_+-=&#123;dddnnnn
      </h3>
      <p>These are my children:</p>
      <div>{children}</div>
    </div>
  );
};
