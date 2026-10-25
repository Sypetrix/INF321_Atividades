defmodule Year do
  @spec leap_year?(non_neg_integer) :: boolean
  def leap_year?(year) do
    (rem(year, 4) == 0 and rem(year, 100) != 0) or rem(year, 400) == 0
  end
end