import { Separator } from '@radix-ui/react-separator';
import { Activity, ArrowDownLeft, ArrowDownUp, ArrowUpRight, MinusCircle, PlusCircle } from 'lucide-react';
import { FaRegCreditCard } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts';
import { Button } from '../../../shared/components/ui/button';
import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
} from '../../../shared/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../shared/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../shared/components/ui/table';
import { Badge } from '../../../shared/components/ui/badge';
import { DashBoardLayout } from '../components/layout';
import { cn } from '../../../shared/components/lib/utils';

const DashBoardPage = () => {
  const navigate = useNavigate();

  const chartData = [
    { month: 'January', receitas: 186, despesas: 80 },
    { month: 'February', receitas: 305, despesas: 200 },
    { month: 'March', receitas: 237, despesas: 120 },
    { month: 'April', receitas: 73, despesas: 190 },
    { month: 'May', receitas: 209, despesas: 130 },
    { month: 'June', receitas: 214, despesas: 140 },
    { month: 'July', receitas: 190, despesas: 160 },
    { month: 'August', receitas: 220, despesas: 180 },
    { month: 'September', receitas: 250, despesas: 170 },
    { month: 'October', receitas: 280, despesas: 190 },
    { month: 'November', receitas: 300, despesas: 210 },
    { month: 'December', receitas: 320, despesas: 230 },
  ];

  const chartConfig = {
    receitas: {
      label: 'Receitas',
      color: '#025864',
    },
    despesas: {
      label: 'Despesas',
      color: '#00D47E',
    },
  };

  const transactionsMock = [
    {
      id: 1,
      tipo: 'receita',
      titulo: 'Venda de produto',
      data: '2024-02-20',
      valor: 250.0,
      status: 'Pago',
      metodo: 'pix',
    },
    {
      id: 2,
      tipo: 'despesa',
      titulo: 'Compra de insumos',
      data: '2024-02-18',
      valor: 120.0,
      status: 'Pendente',
      metodo: 'credito',
    },
    {
      id: 3,
      tipo: 'receita',
      titulo: 'Serviço prestado',
      data: '2024-02-15',
      valor: 500.0,
      status: 'Pago',
      metodo: 'debito',
    },
    {
      id: 4,
      tipo: 'despesa',
      titulo: 'Aluguel',
      data: '2024-02-10',
      valor: 800.0,
      status: 'Atrasado',
      metodo: 'pix',
    },
    {
      id: 5,
      tipo: 'receita',
      titulo: 'Investimento recebido',
      data: '2024-02-08',
      valor: 1500.0,
      status: 'Pago',
      metodo: 'credito',
    },
    {
      id: 6,
      tipo: 'despesa',
      titulo: 'Pagamento de fornecedor',
      data: '2024-02-05',
      valor: 200.0,
      status: 'Pago',
      metodo: 'dinheiro',
    },
    {
      id: 7,
      tipo: 'receita',
      titulo: 'Reembolso',
      data: '2024-02-03',
      valor: 80.0,
      status: 'Pago',
      metodo: 'vale',
    },
    {
      id: 8,
      tipo: 'despesa',
      titulo: 'Conta de luz',
      data: '2024-01-30',
      valor: 300.0,
      status: 'Pendente',
      metodo: 'debito',
    },
    {
      id: 9,
      tipo: 'receita',
      titulo: 'Freelance',
      data: '2024-01-28',
      valor: 700.0,
      status: 'Pago',
      metodo: 'pix',
    },
    {
      id: 10,
      tipo: 'despesa',
      titulo: 'Manutenção do escritório',
      data: '2024-01-25',
      valor: 450.0,
      status: 'Pago',
      metodo: 'credito',
    },
  ];

  return (
    <DashBoardLayout>
      <div className="p-2">
        <div className="w-full h-full p-2">
          <div className="flex items-center justify-between p-2 h-32 bg-gradient-to-br from-[#025864] to-[#00A4A6] text-white border rounded-lg w-full">
            <div className='ml-6'>
              <h1>Saldo Mensal</h1>
              <h4 className='text-2xl'>R$ 1.500,00</h4>
            </div>
            <div className="flex gap-4 mr-6">
              <Button
                onClick={() => navigate("/receitas")}
                className="w-28 h-10 bg-[#025864] text-white font-medium cursor-pointer transition-all ease-in-out duration-500"
              >
                <PlusCircle />
                <span>Receitas</span>
              </Button>
              <Button 
                onClick={() => navigate("/despesas")}
                className="w-28 h-10 font-bold bg-[#00D47E] cursor-pointer transition-all ease-in-out duration-500"
              >
                <MinusCircle />
                Despesas
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-2 p-2">
          <div className="flex w-full">
            <div className="w-full">
              <div className="flex items-center gap-1 mb-4">
                <ArrowDownUp size={20} className="text-[#00D47E]" />
                Fluxo Financeiro
              </div>
              <ChartContainer className="w-[95%] h-[30vh]" config={chartConfig}>
                <BarChart width={500} height={300} data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Tooltip content={<ChartTooltipContent hideLabel />} />
                  <Legend content={<ChartLegendContent />} />
                  <Bar
                    dataKey="receitas"
                    stackId="a"
                    fill={chartConfig.receitas.color}
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="despesas"
                    stackId="a"
                    fill={chartConfig.despesas.color}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
            <Separator className="border m-4" />
            <div className="gap-2 w-[25%]">
              <div className="w-full p-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filtre os meses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Meses</SelectLabel>
                      <SelectItem value="apple">Janeiro - Março</SelectItem>
                      <SelectItem value="banana">Março - Abril</SelectItem>
                      <SelectItem value="blueberry">Abril - Junho</SelectItem>
                      <SelectItem value="grapes">Junho - Agosto</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full h-full p-2">
                <div className="flex gap-4 items-center mb-2 p-1">
                  <div>
                    <ArrowUpRight
                      size={30}
                      className="rounded text-white p-1 bg-[#025864]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Receitas</span>
                    <span className="text-[20px]">R$ 15.000,00</span>
                  </div>
                </div>
                <Separator className="border" />
                <div className="flex gap-4 items-center mb-2 p-1">
                  <div>
                    <ArrowDownLeft
                      size={30}
                      className="rounded text-white p-1 bg-[#00D47E]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Despesas</span>
                    <span className="text-[20px]">R$ 5.000,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full mt-2 p-2 h-full max-h-[28vh]">
          <div className="p-2 border rounded-lg w-2/3">
            <div className="flex items-center gap-2 border-b py-2">
              <Activity size={20} className="text-[#00D47E]" />
              Atividades Recentes
            </div>
            <div className="h-full max-h-[80%] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Tipo</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Método</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactionsMock.map((transactions) => (
                    <TableRow key={transactions.id}>
                      <TableCell className="font-medium">
                        {transactions.tipo}
                      </TableCell>
                      <TableCell>{transactions.titulo}</TableCell>
                      <TableCell>{transactions.valor}</TableCell>
                      <TableCell>
                      <Badge className={cn(transactions.status === "Pago" ? "bg-green-500" : "bg-red-500")}>
                        {transactions.status}
                      </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {transactions.metodo}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="p-2 w-1/3">
            <div className="flex justify-between h-10">
              <div className="flex items-center gap-2">
                <FaRegCreditCard size={20} className="text-[#00D47E]" />
                <span className="">Meus Cartões</span>
              </div>
              <Button
                className="cursor-pointer"
                onClick={() => navigate('/cartoes')}
              >
                Ver todos
              </Button>
            </div>
            <div className="relative w-full h-36 mt-2 flex justify-center">
              <div className="relative border w-full h-32 rounded-lg bg-gradient-to-br from-[#025864] to-[#00A4A6] p-4 flex flex-col justify-between text-white shadow-xl">
                <div className="text-base text-end tracking-widest font-medium">
                  **** **** **** 3456
                </div>
                <div className="flex justify-between text-sm">
                  <span className="uppercase">R$ 1.573,40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export { DashBoardPage };
