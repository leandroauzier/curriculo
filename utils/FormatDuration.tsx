const PT_MONTHS: Record<string, number> = {
  jan: 0,
  janeiro: 0,
  fev: 1,
  fevereiro: 1,
  mar: 2,
  março: 2,
  marco: 2,
  abr: 3,
  abril: 3,
  mai: 4,
  maio: 4,
  jun: 5,
  junho: 5,
  jul: 6,
  julho: 6,
  ago: 7,
  agosto: 7,
  set: 8,
  setembro: 8,
  out: 9,
  outubro: 9,
  nov: 10,
  novembro: 10,
  dez: 11,
  dezembro: 11,
};

function parsePtMonthYear(dateText: string) {
  const normalized = dateText
    .toLowerCase()
    .replace(".", "")
    .replace(" de ", " ")
    .trim();

  const [monthText, yearText] = normalized.split(" ");

  const month = PT_MONTHS[monthText];
  const year = Number(yearText);

  if (month === undefined || Number.isNaN(year)) {
    throw new Error(`Data inválida: ${dateText}`);
  }

  return {
    month,
    year,
  };
}

function formatCurrentMonthYear() {
  return new Date()
    .toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    })
    .replace(".", "");
}

function countMonthsInclusive(startText: string, endText?: string) {
  const start = parsePtMonthYear(startText);

  const end = endText
    ? parsePtMonthYear(endText)
    : {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      };

  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

function formatDurationTime(totalMonths: number) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "mês" : "meses"}`);
  }

  return parts.join(" e ");
}

export function formatDurationFromText(
  startDateText: string,
  endDateText?: string,
  useCurrentLabel = false
) {
  const endLabel = endDateText
    ? endDateText
    : useCurrentLabel
      ? "o momento"
      : formatCurrentMonthYear();

  const totalMonths = countMonthsInclusive(startDateText, endDateText);
  const durationTime = formatDurationTime(totalMonths);

  return `${startDateText} - ${endLabel} · ${durationTime}`;
}