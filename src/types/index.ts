// This may eventually be broken down and converted to a
// barrel file, it just depends on how many global types I end
// up collecting that don't make sense place somewhere else

export type PageMeta = {
  title: string;
  description: string;
};

export type QuestionCategory = {
  id: number;
  label: string;
};
