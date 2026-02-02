import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Wallet } from "lucide-react";

const enterpriseEconomics = [
  { metric: "Device Cost", value: "₹8,000" },
  { metric: "Monthly Revenue", value: "₹2,000" },
  { metric: "Payback Period", value: "4 Months", highlight: true },
  { metric: "Monthly Profit (Post-Payback)", value: "₹1,400" },
  { metric: "Margin", value: "70%", highlight: true },
];

const lowEndEconomics = [
  { metric: "Device Cost", value: "₹3,000" },
  { metric: "Monthly Revenue", value: "₹800" },
  { metric: "Payback Period", value: "4 Months", highlight: true },
  { metric: "Monthly Profit (Post-Payback)", value: "₹560" },
  { metric: "Margin", value: "70%", highlight: true },
];

export function UnitEconomicsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="h-4 w-4" />
              Unit Economics
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">4-Month</span> Payback Period
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Strong unit economics with low CAC and high LTV — every device pays for itself in just 4 months
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/10 rounded-2xl p-6 text-center border border-border/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">4 Months</div>
              <div className="text-muted">Payback Period</div>
            </div>
            <div className="bg-card/10 rounded-2xl p-6 text-center border border-border/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">₹50</div>
              <div className="text-muted">Customer Acquisition Cost</div>
            </div>
            <div className="bg-card/10 rounded-2xl p-6 text-center border border-border/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">₹3,000+</div>
              <div className="text-muted">Lifetime Value</div>
            </div>
          </div>

          {/* Economics Tables */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Enterprise Device */}
            <div className="bg-card/5 rounded-2xl p-6 border border-border/20">
              <h3 className="text-xl font-bold mb-4 text-center">Enterprise Device</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/20">
                    <TableHead className="text-muted">Metric</TableHead>
                    <TableHead className="text-right text-muted">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enterpriseEconomics.map((row) => (
                    <TableRow key={row.metric} className="border-border/20">
                      <TableCell className="text-background">{row.metric}</TableCell>
                      <TableCell className={`text-right font-semibold ${row.highlight ? "text-primary" : "text-background"}`}>
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Low-End Device */}
            <div className="bg-card/5 rounded-2xl p-6 border border-border/20">
              <h3 className="text-xl font-bold mb-4 text-center">Low-End Device</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/20">
                    <TableHead className="text-muted">Metric</TableHead>
                    <TableHead className="text-right text-muted">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lowEndEconomics.map((row) => (
                    <TableRow key={row.metric} className="border-border/20">
                      <TableCell className="text-background">{row.metric}</TableCell>
                      <TableCell className={`text-right font-semibold ${row.highlight ? "text-primary" : "text-background"}`}>
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
